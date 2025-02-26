# /user/register Endpoint Documentation

## Description
This endpoint registers a new user. It validates required fields, hashes the provided password, creates a new user record, and returns an authentication token along with the user details.

## Request

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

## Responses

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

# /user/login Endpoint Documentation

## Description
This endpoint authenticates a user by validating credentials and returning an authentication token with user details upon success.

## Request

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

## Responses

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
    "error": "Invalid credentials"
  }
  ```

# /user/profile Endpoint Documentation

## Description
Retrieves profile details of the authenticated user.  
**Access:** Private

## Request

**Method:** GET  
**URL:** /user/profile

**Headers:**
- Authorization: Bearer &lt;token&gt;

## Response

- **200 OK:**  
  Returns the user profile data.
  ```json
  {
    "id": "12345",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "2023-10-01T12:34:56Z"
  }
  ```

# /user/docs Endpoint Documentation

## Description
Provides general documentation or resources for the authenticated user.  
**Access:** Private

## Request

**Method:** GET  
**URL:** /user/docs

**Headers:**
- Authorization: Bearer &lt;token&gt;

## Response

- **200 OK:**  
  Returns documentation data.
  ```json
  {
    "docs": [
      {
        "title": "User Guide",
        "url": "https://example.com/docs/user-guide"
      },
      {
        "title": "API Reference",
        "url": "https://example.com/docs/api-reference"
      }
    ]
  }
  ```

# /captain/register Endpoint Documentation

## Description
Registers a new captain with personal and vehicle details. Validates input, hashes the password, creates a new record, and returns an auth token along with captain details.

## Request

**Method:** POST  
**URL:** /captain/register

**Payload Format:**
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"  // optional
  },
  "email": "jane.smith@example.com",
  "password": "securePassword123",
  "vehicle": {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2020,
    "licensePlate": "XYZ1234"
  }
}
```

**Validation Rules:**
- **email:** Must be a valid email format.
- **fullname.firstname:** At least 3 characters long.
- **password:** At least 6 characters long.
- **vehicle.make:** Required.
- **vehicle.model:** Required.
- **vehicle.year:** Must be a valid year.
- **vehicle.licensePlate:** Required.

## Responses

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
      "id": "67890",
      "fullname": { "firstname": "Jane", "lastname": "Smith" },
      "email": "jane.smith@example.com",
      "vehicle": {
        "make": "Toyota",
        "model": "Corolla",
        "year": 2020,
        "licensePlate": "XYZ1234"
      },
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

# /captain/login Endpoint Documentation

## Description
Authenticates a captain by validating credentials and returns an authentication token along with captain details.

## Request

**Method:** POST  
**URL:** /captain/login

**Payload Format:**
```json
{
  "email": "jane.smith@example.com",
  "password": "securePassword123"
}
```

**Validation Rules:**
- **email:** Must be a valid email format.
- **password:** At least 6 characters long.

## Responses

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
      "id": "67890",
      "fullname": { "firstname": "Jane", "lastname": "Smith" },
      "email": "jane.smith@example.com",
      "vehicle": {
        "make": "Toyota",
        "model": "Corolla",
        "year": 2020,
        "licensePlate": "XYZ1234"
      },
      "createdAt": "2023-10-01T12:34:56Z"
    }
  }
  ```

- **400 Bad Request:**  
  Returns validation errors:
  ```json
  {
    "error": "Invalid credentials"
  }
  ```

# /captain/profile Endpoint Documentation

## Description
Retrieves profile details of the authenticated captain.  
**Access:** Private

## Request

**Method:** GET  
**URL:** /captain/profile

**Headers:**
- Authorization: Bearer &lt;token&gt;

## Response

- **200 OK:**  
  Returns the captain profile data.
  ```json
  {
    "id": "67890",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "licensePlate": "XYZ1234"
    },
    "createdAt": "2023-10-01T12:34:56Z"
  }
  ```

# /captain/logout Endpoint Documentation

## Description
Logs out the authenticated captain by invalidating the authentication token.  
**Access:** Private

## Request

**Method:** POST  
**URL:** /captain/logout

**Headers:**
- Authorization: Bearer &lt;token&gt;

## Response

- **200 OK:**  
  Returns a success message.
  ```json
  {
    "message": "Successfully logged out"
  }
  ```
