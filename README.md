# Quito Lírica Ópera Show - Sitio Web

**Versión:** 1.1

Este es el repositorio del sitio web oficial de Quito Lírica Ópera Show, un grupo de entretenimiento musical que une la lírica con el humor en Ecuador.

## Descripción del Proyecto

El sitio web sirve como la principal presencia en línea de Quito Lírica, permitiendo a los visitantes conocer más sobre sus espectáculos, historia, programas educativos y contactarlos para contrataciones.

La aplicación está construida con las siguientes tecnologías:
- **Framework:** Next.js (con App Router)
- **Lenguaje:** TypeScript
- **UI:** React, ShadCN UI, Tailwind CSS
- **Backend y Base de Datos:** Firebase (Firestore para solicitudes y Auth para el panel de admin)
- **Funcionalidad IA:** Genkit para flujos de contacto y suscripción.

## Primeros Pasos

Para levantar el entorno de desarrollo local, sigue estos pasos:

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

Abre [http://localhost:9002](http://localhost:9002) en tu navegador para ver la aplicación.

## Panel de Administración

La aplicación incluye un panel de administración en `/admin/dashboard` para ver las solicitudes de presentación. El acceso está protegido y requiere autenticación.
