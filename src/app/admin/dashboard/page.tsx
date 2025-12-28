'use client';

import AdminAuth from '@/components/auth/admin-auth';
import { useCollection } from '@/firebase';
import { useFirebase } from '@/firebase/provider';
import { collection, query, orderBy } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

export default function AdminDashboardPage() {
  const { firestore, auth } = useFirebase();

  const presentationRequestsQuery = firestore 
    ? query(collection(firestore, 'presentationRequests'), orderBy('requestDateTime', 'desc'))
    : null;

  // IMPORTANT: The query is memoized inside the useCollection hook.
  // For more complex queries that depend on component state/props, you should use useMemoFirebase.
  const { data: requests, isLoading } = useCollection(presentationRequestsQuery);

  const handleSignOut = async () => {
    if (auth) {
      await auth.signOut();
    }
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
            {!isLoading && requests && (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Teléfono</TableHead>
                      <TableHead>Mensaje</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((req) => (
                      <TableRow key={req.id}>
                        <TableCell>
                          {req.requestDateTime?.toDate ? (
                            <span className="whitespace-nowrap">
                              {format(req.requestDateTime.toDate(), "d MMM yyyy, HH:mm", { locale: es })}
                            </span>
                          ) : (
                            <Badge variant="secondary">Fecha no disponible</Badge>
                          )}
                        </TableCell>
                        <TableCell className="font-medium">{req.name}</TableCell>
                        <TableCell><a href={`mailto:${req.email}`} className="text-primary hover:underline">{req.email}</a></TableCell>
                        <TableCell>{req.phone || <span className="text-muted-foreground/60">No provisto</span>}</TableCell>
                        <TableCell className="max-w-sm whitespace-pre-wrap">{req.message}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
             {!isLoading && (!requests || requests.length === 0) && (
                <p className="text-center text-muted-foreground py-10">No hay solicitudes por el momento.</p>
             )}
          </CardContent>
        </Card>
      </div>
    </AdminAuth>
  );
}
