
'use client';

import AdminAuth from '@/components/auth/admin-auth';
import { useCollection, updateDocumentNonBlocking } from '@/firebase';
import { useFirebase, useMemoFirebase } from '@/firebase/provider';
import { collection, query, orderBy, doc } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { format }s from 'date-fns';
import { es } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

type RequestWithFormattedDate = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  isViewed?: boolean;
  requestDateTime: any;
  formattedDate: string;
};

export default function AdminDashboardPage() {
  const { firestore, auth } = useFirebase();
  const [displayRequests, setDisplayRequests] = useState<RequestWithFormattedDate[]>([]);

  const presentationRequestsQuery = useMemoFirebase(() => 
    firestore 
      ? query(
          collection(firestore, 'presentationRequests'), 
          orderBy('isViewed', 'asc'),
          orderBy('requestDateTime', 'desc')
        )
      : null
  , [firestore]);

  const { data: requests, isLoading } = useCollection(presentationRequestsQuery);

  useEffect(() => {
    if (requests) {
      // Format dates on the client-side to avoid hydration mismatch
      const formatted = requests.map(req => ({
        ...req,
        formattedDate: req.requestDateTime?.toDate 
          ? format(req.requestDateTime.toDate(), "d MMM yyyy, HH:mm", { locale: es })
          : "Fecha no disponible"
      }));
      setDisplayRequests(formatted);
    }
  }, [requests]);


  const handleSignOut = async () => {
    if (auth) {
      await auth.signOut();
    }
  };

  const handleViewedChange = (id: string, currentStatus: boolean) => {
    if (!firestore) return;
    const requestDocRef = doc(firestore, 'presentationRequests', id);
    updateDocumentNonBlocking(requestDocRef, { isViewed: !currentStatus });
  };

  return (
    <AdminAuth>
      <div className="min-h-screen bg-background/90 p-4 sm:p-8">
        <Card className="max-w-7xl mx-auto bg-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-headline text-gold-gradient">Solicitudes de Presentación</CardTitle>
              <CardDescription>Aquí puedes ver todas las solicitudes recibidas.</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar Sesión
            </Button>
          </CardHeader>
          <CardContent>
            {isLoading && <p className="text-center text-muted-foreground">Cargando solicitudes...</p>}
            {!isLoading && displayRequests && (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">Visto</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Teléfono</TableHead>
                      <TableHead>Mensaje</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {displayRequests.map((req) => (
                      <TableRow 
                        key={req.id}
                        className={cn(req.isViewed && 'bg-muted/30 text-muted-foreground')}
                      >
                        <TableCell>
                          <Checkbox
                            checked={!!req.isViewed}
                            onCheckedChange={() => handleViewedChange(req.id, !!req.isViewed)}
                            aria-label="Marcar como visto"
                          />
                        </TableCell>
                        <TableCell>
                          {req.formattedDate !== "Fecha no disponible" ? (
                            <span className="whitespace-nowrap">{req.formattedDate}</span>
                          ) : (
                             <Badge variant="secondary">{req.formattedDate}</Badge>
                          )}
                        </TableCell>
                        <TableCell className={cn('font-medium', !req.isViewed && 'text-foreground')}>{req.name}</TableCell>
                        <TableCell><a href={`mailto:${req.email}`} className="text-primary hover:underline">{req.email}</a></TableCell>
                        <TableCell>{req.phone || <span className="text-muted-foreground/60">No provisto</span>}</TableCell>
                        <TableCell className={cn('max-w-sm whitespace-pre-wrap', !req.isViewed && 'text-foreground/90')}>{req.message}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
             {!isLoading && (!displayRequests || displayRequests.length === 0) && (
                <p className="text-center text-muted-foreground py-10">No hay solicitudes por el momento.</p>
             )}
          </CardContent>
        </Card>
      </div>
    </AdminAuth>
  );
}
