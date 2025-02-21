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
  
// ...additional docs as needed...
