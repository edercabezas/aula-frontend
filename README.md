
## 📂 Estructura del proyecto

app
│── app.module.ts // Módulo raíz
│── app-routing.module.ts // Rutas raíz
│
├── core // Servicios y lógica global
│ ├── guards
│ │ └── auth.guard.ts
│ ├── interceptors
│ │ └── auth.interceptor.ts
│ └── services
│ ├── alert
│ │ └── alert.service.ts
│ ├── auth
│ │ └── auth.service.ts
│ ├── crud
│ │ └── crud.service.ts
│ └── storage
│ └── storage.service.ts
│
├── feature // Features independientes
│ ├── auth
│ │ ├── login
│ │ │ └── login.component.ts|html|scss
│ │ ├── auth-routing.module.ts
│ │ └── auth.module.ts
│ └── profile
│ ├── update-photo
│ │ └── update-photo.component.ts|html|scss
│ ├── update-profile
│ │ └── update-profile.component.ts|html|scss
│ ├── view-profile
│ │ └── view-profile.component.ts|html|scss
│ ├── profile-routing.module.ts
│ └── profile.module.ts
│
├── import // Importaciones comaprtidas
│ └── import.module.ts
│
├── shared
│ ├── shared.module.ts
│ ├── header
│ │ └── header.component.ts|html|scss
│ └── spinner
│ └── spinner.component.ts|html|scss
│
└── assets // Recursos estáticos



# FrontEnd
Este prueba tecnica esta desarrollada en angualr 19

## Requisitos

1. instalar version de node 20 en adelante (https://nodejs.org/es/)
2. instalar angular (npm install -g @angular/cli)
3. Tener instalado git (https://git-scm.com/)

## Clonar 
1. Clonar repositorio (git@github.com:edercabezas/aula-frontend.git)

## configuracion de ambiente local

2. ingresar a la carpeta del repositorio  (cd innclod)
3. Instalacion de dependencia de angualr (npm install o npm i)
4. levantar el servidor local angular (ng serve o ng s)
5. crear nuevo componente (ng generate component nombre_componente o ng g c nombre_componente)
6. visualizar el proyecto en local (http://localhost:4200/)

## despliegeue a producció

7. compilar el proeycto para desliegue (ng build)


Nota cada uno de los puntos se desarrollo de acuerdo a la especificaciones del documento hubieron una inconcistencia 

1. Estructura se solicitaba este campo "tipo_naturaleza": "natural", pero el back no loe staba esperando.
2. La imagen nos e puede cargar ya que al aprecer el back no esta exponiendo los documentso estaticos
