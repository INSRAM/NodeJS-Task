# NodeJS-Task

> Server is running on port 3000.
> MVC architecture used for this task.
> Use Mongodb Atlas as database.
> Mongoose Schema

    - User Schema with email and password

> Login and Sinup post routes (JWT used for authentication)

    -  ** /singup **
        - Request body will be checked is it empty or not
        - Authenticate the Textfields
        - User will be created if email will not exist in database (unique email will use for signup).
        - JWT token will assign
        - At the end response will be send with 200 status code.

    - ** /signin **
        - Request body will be checked is it empty or not
        - Authenticate the Textfields
        - user will be checked in database if user does not exist, error response will be send
        - JWT token will assign
        - At the end response will be send with 200 status code.

> Profile get route

    - ** / **
        -  JWT token will be check
        - Usertype will check on next middleware
        - According to user type data will be send as response (if user type is admin add database users data will be send as response)

    - ** /signout **
        - Cookie token will be expire and also set empty body
        - 200 response send with successfully logout message

> Delete and Patch routes also set
