# API Documentation

// ...existing introduction and sections...

## User Endpoints

### POST /user/register
This endpoint registers a new user. It validates required fields, hashes the provided password, creates a new user record, and returns an authentication token along with the user details.

**Method:** POST  
**URL:** /user/register

**Payload Format:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"  // optional
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Validation Rules:**
- **email:** Must be a valid email format.
- **fullname.firstname:** At least 3 characters long.
- **password:** At least 6 characters long.

**Responses:**

- **201 Created:**  
  Returns:
  ```json
  {
    "token": "JWT-token-string",
    "user": { /* user details */ }
  }
  ```

  **Example Successful Response:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "12345",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john.doe@example.com",
      "createdAt": "2023-10-01T12:34:56Z"
    }
  }
  ```

- **400 Bad Request:**  
  Returns validation errors:
  ```json
  {
    "error": [ { "msg": "Invalid Email", ... } ]
  }
  ```

### POST /user/login
This endpoint logs in an existing user. It validates the provided email and password, and returns an authentication token along with the user details.

**Method:** POST  
**URL:** /user/login

**Payload Format:**
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Validation Rules:**
- **email:** Must be a valid email format.
- **password:** At least 6 characters long.

**Responses:**

- **200 OK:**  
  Returns:
  ```json
  {
    "token": "JWT-token-string",
    "user": { /* user details */ }
  }
  ```

  **Example Successful Response:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "12345",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john.doe@example.com",
      "createdAt": "2023-10-01T12:34:56Z"
    }
  }
  ```

- **400 Bad Request:**  
  Returns validation errors:
  ```json
  {
    "error": [ { "msg": "Invalid Email or Password", ... } ]
  }
  ```

### GET /user/profile
This endpoint retrieves the profile of the authenticated user.

**Method:** GET  
**URL:** /user/profile

**Responses:**

- **200 OK:**  
  Returns:
  ```json
  {
    "user": { /* user details */ }
  }
  ```

  **Example Successful Response:**
  ```json
  {
    "user": {
      "id": "12345",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john.doe@example.com",
      "createdAt": "2023-10-01T12:34:56Z"
    }
  }
  ```

- **401 Unauthorized:**  
  Returns:
  ```json
  {
    "error": "Unauthorized"
  }
  ```

### POST /user/logout
This endpoint logs out the authenticated user.

**Method:** POST  
**URL:** /user/logout

**Responses:**

- **200 OK:**  
  Returns:
  ```json
  {
    "message": "Successfully logged out"
  }
  ```

## Captain Endpoints

### POST /captain/register
This endpoint registers a new captain. It validates required fields, hashes the provided password, creates a new captain record, and returns an authentication token along with the captain details.

**Method:** POST  
**URL:** /captain/register

**Payload Format:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"  // optional
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Validation Rules:**
- **email:** Must be a valid email format.
- **fullname.firstname:** At least 3 characters long.
- **password:** At least 6 characters long.

**Responses:**

- **201 Created:**  
  Returns:
  ```json
  {
    "token": "JWT-token-string",
    "captain": { /* captain details */ }
  }
  ```

  **Example Successful Response:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
      "id": "12345",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john.doe@example.com",
      "createdAt": "2023-10-01T12:34:56Z"
    }
  }
  ```

- **400 Bad Request:**  
  Returns validation errors:
  ```json
  {
    "error": [ { "msg": "Invalid Email", ... } ]
  }
  ```

### POST /captain/login
This endpoint logs in an existing captain. It validates the provided email and password, and returns an authentication token along with the captain details.

**Method:** POST  
**URL:** /captain/login

**Payload Format:**
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Validation Rules:**
- **email:** Must be a valid email format.
- **password:** At least 6 characters long.

**Responses:**

- **200 OK:**  
  Returns:
  ```json
  {
    "token": "JWT-token-string",
    "captain": { /* captain details */ }
  }
  ```

  **Example Successful Response:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
      "id": "12345",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john.doe@example.com",
      "createdAt": "2023-10-01T12:34:56Z"
    }
  }
  ```

- **400 Bad Request:**  
  Returns validation errors:
  ```json
  {
    "error": [ { "msg": "Invalid Email or Password", ... } ]
  }
  ```

### GET /captain/profile
This endpoint retrieves the profile of the authenticated captain.

**Method:** GET  
**URL:** /captain/profile

**Responses:**

- **200 OK:**  
  Returns:
  ```json
  {
    "captain": { /* captain details */ }
  }
  ```

  **Example Successful Response:**
  ```json
  {
    "captain": {
      "id": "12345",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john.doe@example.com",
      "createdAt": "2023-10-01T12:34:56Z"
    }
  }
  ```

- **401 Unauthorized:**  
  Returns:
  ```json
  {
    "error": "Unauthorized"
  }
  ```

### POST /captain/logout
This endpoint logs out the authenticated captain.

**Method:** POST  
**URL:** /captain/logout

**Responses:**

- **200 OK:**  
  Returns:
  ```json
  {
    "message": "Successfully logged out"
  }
  ```
