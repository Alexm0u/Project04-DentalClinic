# Welcome to my Dental Clinic Backend

<details>
  <summary>Content 📝</summary>
  <ol>
    <li><a href="#objective">Objective</a></li>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagram">Diagram</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#licence">Licence</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Objective
This project requires an API connected to a database with at least one relation "One to Many" and "Many to Many". The API should be functional.

## About the project
The project goal is to help with the organization on a Dental Clinic. Trough this API you can manage basics functions: 

- Create, update and delete users.
- Admin services and appointments.
- Manage user permission for staff and clients.

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


## Diagram
![image](https://user-images.githubusercontent.com/121814511/222975585-e33b1ecd-fc84-4b23-83bd-6e77fd566c60.png)

## Installation
1. Clone repository.
2. Install dependencies.
3. Connect repo with database.
4. ``` $ Execute migrations ``` 
5. ``` $ Execute seeders ``` 
6. ``` $ npm run dev ``` 

## Dependencies
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
                "dni_nif": "1245978QR",
                "fullName": "Alvaro Titán",
                "phone": 654789632,
                "email": "kingofsouth@gmail.com",
                "password": "thekingonthesouth",
                "payment": "Efectivo",
                "comments": "un tipo blando",
                "role_id": 1
            }
        ```

    - LOGIN

            POST localhost:3000/login  
        body:
        ``` js
            {
                "email": "kingofsouth@gmail.com",
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
    - SEE OWN APPOINTMENTS AS CLIENT

            GET  http://localhost:3000/appointmentuser
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
    - SEE ALL APPOINTMENTS AS DOCTOR ****

            GET  http://localhost:3000/appointments/
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
    - SEE ALL USERS AS DOCTOR ****

            GET  http://localhost:3000/appointments/
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
</details>

## Licence

This project it's under licence of Álvaro Bernabé Alonso & Àlex Moya Camps.

## Development

``` js
 thisApp.belongsTo.Alvaro&Alex

 Developed by: alvarito101093 & Alexm0u
```  

## Contact
Álvaro links:
<a href = "mailto:alvaro101093@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/álvaro-bernabé-alonso-6514a999/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

Àlex links:
<a href = "mailto:alex.moyacamps@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/alejandro-moya-camps-5448a477/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>

