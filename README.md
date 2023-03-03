# Welcome to my Dental Clinic Backend

<details>
  <summary>Content 📝</summary>
  <ol>
    <li><a href="#objective">Objective</a></li>
    <li><a href="#About-the-proyect">About the project</a></li>
    <li><a href="#deploy-🚀">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#futuras-funcionalidades">Futuras funcionalidades</a></li>
    <li><a href="#contribuciones">Contribuciones</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#webgrafia">Webgrafia</a></li>
    <li><a href="#desarrollo">Desarrollo</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Objective
The project requires an API connected to a database with at least one relation "One to Many" and "Many to Many". The API should be functional.

## About the project
The project goal is to help with the organization on a Dental Clinic. Trough this API you can manage basics functions: 

- Create, update and delete users.
- Admin services and appointments.
- Manage user permission for staff and clients.

## Deploy 🚀
<div align="center">
    <a href="https://www.google.com"><strong>Url a producción pdte </strong></a>🚀🚀🚀
</div>

## Stack
Used tech:
<div align="center">
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
 </div>


## Diagram DB
!['imagen-db'](./images/sampleDb.png)

## Dependencies required:
1. Bcrypt 5.1.0
2. Dotenv 16.0.3
3. Express 4.18.2 
4. Jsonwebtoken 9.0.0
5. Mysql2 3.1.2
6. Nodemon 2.0.20
7. Sequelize 6.29.0
8. Sequelize-cli 6.6.0

## Endpoints
<details>
<summary>Endpoints</summary>


    - REGISTER

            POST http://localhost:3000/user
        body:
        ``` js
            {
                "fullName": "Alvaro",
                "email": "Alvaro@alvaro.com",
                "password": "thekingonthesouth"
            }
        ```

    - LOGIN

            POST localhost:3000/login  
        body:
        ``` js
            {
                "email": "Alvaro@alvaro.com",
                "password": "thekingonthesouth"
            }
        ```

    - UPDATE USER

            PUT http://localhost:3000/updateuser
        body:
        ``` js
            {
                "fullName": "Adam",
                "email": "Adam@adam.com",
                "password": "princeofeternia"
            }
        ```

    - NEW APPOINTMENT

            POST http://localhost:3000/users/appointment http://localhost:3000/users/appointment/delete/1
        body:
        ``` js
            {
                "email": "Adan@adam.com",
                "password": "princeofeternia",
                "service_id": 1,
                "user_id": 4,
                "doctor_id": 1,
                "updatedAt": "2023-03-03T15:51:57.538Z",
                "createdAt": "2023-03-03T15:51:57.538Z"
            }
        ```

    - UPDATE APPOINTMENT

            PUT  http://localhost:3000/users/appointment/delete/1
        body:
        ``` js
            {
                "email": "Adan@adam.com",
                "password": "princeofeternia",
                "service_id": 2,
                "user_id": 4,
                "doctor_id": 1,
                "updatedAt": "2023-04-03T15:51:57.538Z",
                "createdAt": "2023-03-03T15:51:57.538Z"
            }
        ```

    - DELETE APPOINTMENT

            POST  http://localhost:3000/users/appointment/delete/1
        body:
        ``` js
            {
                "email": "Adan@adam.com",
                "password": "princeofeternia",
                "service_id": 1,
                "user_id": 4,
                "doctor_id": 1,
                "updatedAt": "2023-03-03T15:51:57.538Z",
                "createdAt": "2023-03-03T15:51:57.538Z"
            }
        ```
    - ENDPOINTS RESTANTES

            POST  http://localhost:3000/users/appointment/delete/1
        body:
        ``` js
            {
                "email": "Adan@adam.com",
                "password": "princeofeternia",
                "service_id": 1,
                "user_id": 4,
                "doctor_id": 1,
                "updatedAt": "2023-03-03T15:51:57.538Z",
                "createdAt": "2023-03-03T15:51:57.538Z"
            }
        ```
</details>

## Licencia
Este proyecto se encuentra bajo licencia de Álvaro Bernabé Alonso & Álex Moya Camps.

## Desarrollo:

``` js
 thisApp.belongsTo.Alvaro&Alex

 Desarrollado por: alvarito101093 & Alexm0u
```  

## Contacto

<a href = "mailto:micorreoelectronico@gmail.com">Álvaro<img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/linkedinUser/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
<a href = "mailto:micorreoelectronico@gmail.com">Álex<img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/linkedinUser/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>