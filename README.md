# App books

## Configuraciones esenciales

#### Se debe tener cuenta en firebase y configurar los servicios de autenticado y firestore para el correcto funcionamiento de la app.

## Configuracion inicial

```bash
# copiar env
$ cd env
$ cp .env.example .env

# Install Las dependencias
$ yarn install

# Levantar servidor en desarrollo
$ yarn dev

# Construir la aplicacion en producción
$ yarn build
$ yarn start

# generar estaticos del proyecto
$ yarn generate
```

## Librerias, framewrok y utilidades

- Nuxtjs
- Firestore
- Template Booksto basado en boostraps 4
- Element UI
- Vercel (Servidor de despliegue de la aplicacion)
