# patawa-backend

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias usando npm:

```bash
npm install


# Crea un archivo .env en el directorio raíz y configura las variables de entorno necesarias

# Uso
# Para iniciar el servidor en modo de desarrollo, ejecuta:
npm run dev

# Para iniciar el servidor en modo de producción, ejecuta:
npm start

# Base de Datos
# Para inicializar la base de datos con datos de prueba, ejecuta el script de semillas de Prisma
npm run prisma:seed


# Para inicializar la base de datos
npx prisma migrate dev --name init


# Desarrollo
# Este proyecto utiliza Prisma como ORM para la base de datos. Asegúrate de tener una instancia de base de datos configurada y conectada antes de ejecutar los scripts relacionados con Prisma.