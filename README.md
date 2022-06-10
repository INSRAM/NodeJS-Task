# NodeJS-Task

> Server is running on port 3000.
> MVC architecture used for this task.
> Use Mongodb Atlas as database.
> Mongoose Schema

    - User Schema with email and password

> Login and Sinup post routes (JWT used for authentication)

    - ** /singup ** post route
        - Request body will be checked is it empty or not
        - Authenticate the Textfields
        - User will be created if email will not exist in database (unique email will use for signup).
        - JWT token will assign
        - At the end response will be send with 200 status code.

