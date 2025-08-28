VIDEOS\AULA-MATRIZ\AULA-FRONTEND\SRC
│   index.html
│   main.server.ts
│   main.ts
│   server.ts
│   styles.scss
│
├───app
│   │   app.component.html
│   │   app.component.scss
│   │   app.component.spec.ts
│   │   app.component.ts
│   │   app.config.server.ts
│   │   app.config.ts
│   │   app.routes.server.ts
│   │   app.routes.ts
│   │
│   ├───core
│   │   ├───guard
│   │   │       auth.guard.ts
│   │   │
│   │   ├───interceptors
│   │   │       auth.interceptors.ts
│   │   │
│   │   ├───interface
│   │   │       profile.interface.ts
│   │   │
│   │   └───services
│   │       ├───alert
│   │       │       alert.service.ts
│   │       │
│   │       ├───auth
│   │       │       auth.service.ts
│   │       │
│   │       ├───crud
│   │       │       crud.service.ts
│   │       │
│   │       └───storage
│   │               storage.service.ts
│   │
│   ├───feature
│   │   ├───auth
│   │   │   │   auth-routing.module.ts
│   │   │   │   auth.module.ts
│   │   │   │
│   │   │   └───login
│   │   │           login.component.html
│   │   │           login.component.scss
│   │   │           login.component.spec.ts
│   │   │           login.component.ts
│   │   │
│   │   └───profile
│   │       │   profile-routing.module.ts
│   │       │   profile.module.ts
│   │       │
│   │       ├───update-photo
│   │       │       update-photo.component.html
│   │       │       update-photo.component.scss
│   │       │       update-photo.component.spec.ts
│   │       │       update-photo.component.ts
│   │       │
│   │       ├───update-profile
│   │       │       update-profile.component.html
│   │       │       update-profile.component.scss
│   │       │       update-profile.component.spec.ts
│   │       │       update-profile.component.ts
│   │       │
│   │       └───view-profile
│   │               view-profile.component.html
│   │               view-profile.component.scss
│   │               view-profile.component.spec.ts
│   │               view-profile.component.ts
│   │
│   ├───import
│   │       import.module.ts
│   │
│   └───shared
│       │   shared.module.ts
│       │
│       ├───header
│       │       header.component.html
│       │       header.component.scss
│       │       header.component.spec.ts
│       │       header.component.ts
│       │
│       └───spiner
│               spiner.component.html
│               spiner.component.scss
│               spiner.component.spec.ts
│               spiner.component.ts
│
└───assets
        camaramara-50.png
        github.svg
        linkedin.svg
        twitterx.svg
        web.png

# FrontEnd

Este prueba tecnica esta desarrollada en angualr 19

## Requisitos

1. instalar version de node 20 en adelante (https://nodejs.org/es/)
2. instalar angular (npm install -g @angular/cli)
3. Tener instalado git (https://git-scm.com/)

## Clonar

1. Clonar repositorio (git@github.com:edercabezas/aula-frontend.git)

## configuracion de ambiente local

2. ingresar a la carpeta del repositorio (cd innclod)
3. Instalacion de dependencia de angualr (npm install o npm i)
4. levantar el servidor local angular (ng serve o ng s)
5. crear nuevo componente (ng generate component nombre_componente o ng g c nombre_componente)
6. visualizar el proyecto en local (http://localhost:4200/)

## despliegeue a producció

7. compilar el proeycto para desliegue (ng build)

Nota cada uno de los puntos se desarrollo de acuerdo a la especificaciones del documento hubieron una inconcistencia

1. Estructura se solicitaba este campo "tipo_naturaleza": "natural", pero el back no loe staba esperando.
2. La imagen nos e puede cargar ya que al aprecer el back no esta exponiendo los documentso estaticos
