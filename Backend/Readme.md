# Backend API Documentation

## `/users/register` Endpoints

#### Description
This endpoint is used to register a new user.

#### HTTP Method
POST

#### Request Body
The request body should be a JSON object containing the following fields:

- `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Example Request
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Example Error Response
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be atleast 3 characters long",
      "param": "firstname",
      "location": "body"
    },
    {
      "msg": "Password must be 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```


## `/users/login` Endpoints

#### Description
This endpoint is used to log in an existing user.

#### HTTP Method
POST

#### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```
#### Example Error Response
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be 6 characters long",
      "param": "password",
      "location": "body"
    }
  ],
  "message": "Invalid Email or Password"
}
```


## `/users/profile` Endpoints

#### Description
This endpoint is used to get the profile of the authenticated user.

#### HTTP Method
GET

#### Authorization
Requires a valid JWT token in the authorization header:
`Authorization: Bearer<token>`

#### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```


## `/users/logout` Endpoints

#### Description
This endpoint is used to log out the authenticated user.

#### HTTP Method
GET

#### Authorization
Requires a valid JWT token in the authorization header or cookie.

## `/captains/register` Endpoints

#### Description
This endpoint is used to register a new captain.

#### HTTP Method
POST

#### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`(object):
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle `(object):
  - `colour` (string, required): The colour of the vehicle. Must be at least 3 characters long.
  - `plateNumber` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (string, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of "car", "motorcycle", or "auto".

#### Example Response
```json
{
  "_id": "60d0fe4f5311236168a109cb",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "vehicle": {
    "colour": "Red",
    "plateNumber": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## `/captains/login` Endpoints

#### Description
This endpoint is used to register a new captain.

#### HTTP Method
POST

#### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.

#### Example Response
```json
{
  "captain": {
    "_id": "60d0fe4f5311236168a109cb",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "colour": "Red",
      "plateNumber": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## `/captains/profile` Endpoints

#### Description
This endpoint is used to get the profile of the authenticated captain.

#### HTTP Method
GET

#### Authorization
Requires a valid JWT token in the authorization header:
`Authorization: Bearer<token>`

#### Example Response
```json
{
  "captain": {
    "_id": "60d0fe4f5311236168a109cb",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "colour": "Red",
      "plateNumber": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

## `/captains/logout` Endpoints

#### Description
This endpoint is used to log out the authenticated captain.

#### HTTP Method
GET

#### Authorization
Requires a valid JWT token in the authorization header:
`Authorization: Bearer<token>`