'use client';

import { useState, useEffect, type ReactNode } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
}

/**
 * Un componente que garantiza que sus hijos solo se rendericen en el lado del cliente.
 * Esto es útil para evitar errores de hidratación con bibliotecas que solo funcionan
 * en el navegador o que interactúan con el DOM de maneras inesperadas.
 */
export function ClientOnly({ children }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // O un componente de carga si se prefiere
  }

  return <>{children}</>;
}
