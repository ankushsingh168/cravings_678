# CRAVINGS

# Backend API Documentation


## Project Information

| Field | Details |
|------|---------|
| Project Name | CRAVINGS |
| Application Type | Food Delivery Application |
| Architecture | MERN Stack |
| Backend Technology | Node.js + Express.js |
| Database | MongoDB |
| ORM | Mongoose |
| Version | 1.0 |
| Developer | Ankush Singh |
| Documentation Version | 1.0 |



# Table of Contents

1. Introduction
2. Project Overview
3. Technology Stack
4. Backend Architecture
5. Folder Structure
6. Authentication System
7. API Documentation
8. Database Models
9. Middleware Documentation
10. Services Documentation
11. File Upload System
12. Email Service
13. JWT Authentication
14. Error Handling
15. Security Implementation
16. Testing Guide
17. Environment Variables
18. Future Enhancements



# 1. Introduction

CRAVINGS is a food delivery web application developed using MERN Stack technology.

The main objective of this project is to provide a digital platform where customers can interact with restaurants, manage their profiles, browse food items and place orders.


The backend system provides secure REST APIs for:

- User Authentication
- User Management
- Restaurant Management
- OTP Verification
- Password Reset
- Profile Management
- Contact Support
- Image Upload
- Email Services



# 2. Project Overview


## Project Purpose

The purpose of CRAVINGS is to build a scalable food delivery platform where users can register, login, manage accounts and communicate with restaurants.


## Backend Responsibilities

The backend handles:


- API Request Management
- Authentication
- Authorization
- Database Operations
- User Validation
- Password Security
- JWT Token Management
- Cloudinary Image Upload
- Email Communication



## Application Architecture


Frontend (React.js)

↓

REST API Request

↓

Express.js Server

↓

Middleware Authentication

↓

Controller Logic

↓

MongoDB Database

↓

API Response



# 3. Technology Stack


## Backend Technologies


| Technology | Purpose |
|------------|---------|
| Node.js | Backend Runtime Environment |
| Express.js | API Development Framework |
| MongoDB | Database |
| Mongoose | MongoDB Object Modeling |
| JWT | Authentication |
| bcrypt | Password Encryption |
| Multer | File Upload Handling |
| Cloudinary | Image Storage |
| Nodemailer | Email Service |
| Cookie Parser | Cookie Management |
| CORS | Cross Origin Security |
| Morgan | API Logging |



## Frontend Technologies


| Technology | Purpose |
|------------|---------|
| React.js | User Interface |
| React Router | Routing |
| Axios | API Communication |
| Tailwind CSS | Styling |



# 4. Backend Architecture


CRAVINGS backend follows MVC Architecture.


## Architecture Flow


Request

↓

Router

↓

Middleware

↓

Controller

↓

Service

↓

Database Model

↓

Response



## MVC Components


### Model

Responsible for:

- Database Schema
- Data Structure
- MongoDB Communication



### Controller

Responsible for:

- Business Logic
- Request Processing
- Response Handling



### Router

Responsible for:

- API Endpoints
- Route Management



### Middleware

Responsible for:

- Authentication
- Authorization
- Validation



# 5. Backend Folder Structure


│
├── config
│ ├── dbConnection.config.js
│ ├── cloudinary.config.js
│
├── controller
│
├── middleware
│
├── models
│
├── router
│
├── services
│
├── utils
│
├── seeders
│
├── .env
│
└── index.js



# 6. Authentication System


CRAVINGS application uses JWT based authentication system.

Authentication provides secure access to protected APIs.


## Authentication Flow


User Registration

↓

User Login

↓

Generate JWT Token

↓

Store Token in HTTP Only Cookie

↓

Access Protected Routes

↓

Logout



# 6.1 User Registration Flow


User enters registration details:


- Full Name
- Email
- Phone Number
- Password
- Date of Birth
- Gender
- Profile Image


Flow:


Frontend

↓

POST /auth/register

↓

Auth Controller

↓

Validate User Data

↓

Hash Password using bcrypt

↓

Create User in MongoDB

↓

Generate Response



# 6.2 Login Flow


Login Process:


User enters:

- Email
- Password


Flow:


Frontend

↓

POST /auth/login

↓

Find User From Database

↓

Compare Password

↓

Generate JWT Token

↓

Store Token in Cookie

↓

Return User Data



# 6.3 JWT Authentication


JWT (JSON Web Token) is used for secure authentication.


JWT contains:


- User ID
- User Role
- Expiry Time



JWT Flow:


Login Successful

↓

Create JWT Token

↓

Encrypt Token

↓

Store Token inside Cookie

↓

Browser sends Cookie with Request

↓

Middleware verifies Token

↓

Allow/Deny Access



# 6.4 Cookie Management


CRAVINGS uses HTTP Only Cookies for storing JWT tokens.


Cookies Used:


| Cookie Name | Purpose |
|------------|---------|
| Oreo | User Authentication Token |
| Kitkat | Password Reset Authentication Token |



## Oreo Cookie


Purpose:

Normal user authentication.


Used For:


- Profile Update
- Change Password
- Protected User APIs



Flow:


Login

↓

Generate JWT

↓

Store Token in Oreo Cookie

↓

Access Protected API



## Kitkat Cookie


Purpose:

Password reset authentication.


Flow:


Forgot Password

↓

Send OTP

↓

Verify OTP

↓

Generate Kitkat Cookie

↓

Reset Password



# 7. Middleware Documentation



Middleware is a function that runs between request and response.


CRAVINGS uses following middleware:



## 7.1 AuthProtect Middleware


Purpose:

Protect user private routes.


Responsibilities:


- Check JWT Token
- Verify User Identity
- Attach User Data
- Allow Access



Used In:


- Edit Profile
- Change Password
- Logout



Flow:


Request

↓

AuthProtect Middleware

↓

Verify JWT

↓

Controller

↓

Response



# 7.2 RestaurantAuthProtect Middleware


Purpose:

Protect restaurant related APIs.


Responsibilities:


- Verify Restaurant JWT
- Check Restaurant Role
- Allow Restaurant Access



Used In:


- Update Restaurant Profile
- Get Restaurant Data



# 7.3 OTPAuthProtect Middleware


Purpose:

Validate OTP based authentication.


Used For:


- Password Reset
- Secure Verification Process



# 8. Security Implementation



CRAVINGS backend follows security best practices.



## Password Security


Passwords are protected using:


bcrypt hashing algorithm.



Flow:


User Password

↓

bcrypt Hash

↓

Store Encrypted Password

↓

Database



## JWT Security


Implemented using:


- Secret Key
- Token Expiration
- HTTP Only Cookie



## API Security


Security Features:


- Authentication Middleware
- Role Based Access
- Password Hashing
- OTP Verification
- Secure Cookies
- Input Validation



# Documentation Status


# 9. API Documentation


## Base URL


Development Server:



## Common Headers


| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Authorization | Bearer Token (Protected APIs) |

# Authentication APIs


# API 1: Server Health Check


## API Name

Server Status Check


## Purpose

Check whether backend server is running successfully.


## Method

GET


## Endpoint

```
/
```


## Authentication

No Authentication Required


## Request Body

None


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "message":"Server is running"
}
```


## Error Response

No Error Response


## Controller Used

index.js


## Middleware Used

None


## Database Collection

None


## Notes

- This API is used to check backend server status.
- No authentication is required.
- No database operation is performed.

---
# API 2: User Registration


## API Name

User Registration API


## Purpose

This API is used to register a new user in the CRAVINGS application.


## Method

POST


## Endpoint

```
POST /auth/register
```


## Authentication

No Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |


## Request Body

```json
{
    "fullName": "Ankush Singh",
    "email": "ankush@gmail.com",
    "phone": "9999999999",
    "password": "123456",
    "dob": "2002-04-20",
    "gender": "Male"
}
```


## Success Response


### Status Code

```
201 Created
```


### Response

```json
{
    "success": true,
    "message": "User Registered Successfully"
}
```


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "All fields are required"
}
```


### 409 Conflict

```json
{
    "success": false,
    "message": "Email already registered"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

auth.controller.js


## Middleware Used

None


## Database Collection

users


## Database Operation

- Validate user input
- Check email availability
- Hash password using bcrypt
- Create new user document
- Store user data in MongoDB


## Notes

- User registration API does not require authentication.
- Email must be unique for every user.
- Password is encrypted using bcrypt before storing in database.
- After successful registration, user account is created successfully.

---

# API 3: User Login


## API Name

User Login API


## Purpose

This API is used to authenticate an existing user in the CRAVINGS application.


## Method

POST


## Endpoint

```
POST /auth/login
```


## Authentication

No Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |


## Request Body

```json
{
    "email": "ankush@gmail.com",
    "password": "123456"
}
```


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "Login Successfully",
    "user": {
        "id": "user_id",
        "fullName": "Ankush Singh",
        "email": "ankush@gmail.com"
    }
}
```


## Cookie Generated

| Cookie Name | Purpose |
|------------|---------|
| Oreo | User Authentication Token |


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "Email and Password are required"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Invalid password"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

auth.controller.js


## Middleware Used

None


## Database Collection

users


## Database Operation

- Find user by email
- Compare password using bcrypt
- Generate JWT token
- Store JWT token in Oreo HTTP Only Cookie
- Return authenticated user data


## Authentication Flow

User Login Request

↓

Validate Email and Password

↓

Find User From MongoDB

↓

Compare Password Using bcrypt

↓

Generate JWT Token

↓

Store Token in Oreo Cookie

↓

Send Response


## Notes

- Login API does not require authentication.
- Valid email and password are required.
- JWT token is generated after successful authentication.
- Token is stored securely inside HTTP Only Cookie.
- Invalid credentials are rejected.

---

# API 4: Get User Profile


## API Name

Get User Profile API


## Purpose

This API is used to get the logged-in user's profile information.


## Method

GET


## Endpoint

```
GET /user/profile
```


## Authentication

Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Cookie | Oreo JWT Token |


## Request Body

None


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "User Profile Fetched Successfully",
    "user": {
        "id": "user_id",
        "fullName": "Ankush Singh",
        "email": "ankush@gmail.com",
        "phone": "9999999999",
        "dob": "2002-04-20",
        "gender": "Male"
    }
}
```


## Error Response


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Unauthorized User"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

user.controller.js


## Middleware Used

AuthProtect Middleware


## Database Collection

users


## Database Operation

- Verify JWT token from Oreo cookie
- Identify logged-in user
- Fetch user data from MongoDB
- Return user profile details


## Authentication Flow

User Request

↓

Oreo Cookie JWT Token

↓

AuthProtect Middleware

↓

Verify User Identity

↓

Fetch User From MongoDB

↓

Send User Profile Response


## Notes

- This API requires user authentication.
- Only logged-in users can access this API.
- JWT token is verified using AuthProtect middleware.
- User profile data is fetched from users collection.

---

# API 5: Edit User Profile


## API Name

Edit User Profile API


## Purpose

This API is used to update the profile information of an authenticated user.


## Method

PUT


## Endpoint

```
PUT /user/edit-profile
```


## Authentication

Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Cookie | Oreo JWT Token |


## Request Body

```json
{
    "fullName": "Ankush Singh",
    "phone": "8888888888",
    "dob": "2002-04-20",
    "gender": "Male"
}
```


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "Profile Updated Successfully",
    "user": {
        "fullName": "Ankush Singh",
        "phone": "8888888888",
        "dob": "2002-04-20",
        "gender": "Male"
    }
}
```


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "No data provided for update"
}
```


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Unauthorized User"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

user.controller.js


## Middleware Used

AuthProtect Middleware


## Database Collection

users


## Database Operation

- Verify JWT token
- Find authenticated user
- Update user profile information
- Save updated user data in MongoDB


## Authentication Flow

User Request

↓

Oreo Cookie JWT Token

↓

AuthProtect Middleware

↓

Verify User Identity

↓

Update User Data

↓

Save Changes in MongoDB

↓

Return Updated Profile


## Notes

- This API requires user authentication.
- Only logged-in users can update their profile.
- Email and password are not updated through this API.
- User data is updated in the users collection.

---

# API 6: Change Password


## API Name

Change Password API


## Purpose

This API is used to change the password of an authenticated user.


## Method

PUT


## Endpoint

```
PUT /user/change-password
```


## Authentication

Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Cookie | Oreo JWT Token |


## Request Body

```json
{
    "oldPassword": "123456",
    "newPassword": "654321",
    "confirmPassword": "654321"
}
```


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "Password Changed Successfully"
}
```


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "All password fields are required"
}
```


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Old password is incorrect"
}
```


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Unauthorized User"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

user.controller.js


## Middleware Used

AuthProtect Middleware


## Database Collection

users


## Database Operation

- Verify JWT token
- Find authenticated user
- Compare old password using bcrypt
- Hash new password using bcrypt
- Update password in MongoDB
- Save updated user data


## Authentication Flow

User Request

↓

Oreo Cookie JWT Token

↓

AuthProtect Middleware

↓

Verify User Identity

↓

Compare Old Password

↓

Hash New Password

↓

Update Password in Database

↓

Send Success Response


## Notes

- This API requires user authentication.
- Old password verification is required.
- New password is stored after bcrypt encryption.
- Password update is performed securely.
- User session remains protected using JWT authentication.

---

# API 7: User Logout


## API Name

User Logout API


## Purpose

This API is used to logout the authenticated user from the CRAVINGS application.


## Method

POST


## Endpoint

```
POST /auth/logout
```


## Authentication

Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Cookie | Oreo JWT Token |


## Request Body

None


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "Logout Successfully"
}
```


## Cookie Operation

| Cookie Name | Operation |
|------------|-----------|
| Oreo | Cookie Cleared |


## Error Response


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Unauthorized User"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

auth.controller.js


## Middleware Used

AuthProtect Middleware


## Database Collection

None


## Database Operation

- Verify JWT token
- Clear Oreo authentication cookie
- Remove user session access


## Authentication Flow

User Logout Request

↓

Oreo Cookie JWT Token

↓

AuthProtect Middleware

↓

Verify User Identity

↓

Clear Oreo Cookie

↓

Send Logout Response


## Notes

- This API requires user authentication.
- Logout removes the JWT token stored in Oreo cookie.
- No database operation is performed.
- After logout, protected APIs cannot be accessed without login.

---

# API 8: Forgot Password


## API Name

Forgot Password API


## Purpose

This API is used to send an OTP to the registered user's email for password reset verification.


## Method

POST


## Endpoint

```
POST /auth/forgot-password
```


## Authentication

No Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |


## Request Body

```json
{
    "email": "ankush@gmail.com"
}
```


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "OTP sent successfully to registered email"
}
```


## Cookie Generated

| Cookie Name | Purpose |
|------------|---------|
| Kitkat | Password Reset Authentication Token |


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "Email is required"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

auth.controller.js


## Middleware Used

None


## Database Collection

users


## Database Operation

- Check user email in database
- Generate OTP
- Store OTP details
- Send OTP through email service
- Generate Kitkat reset token


## Service Used

- Nodemailer Email Service
- OTP Generation Service


## Authentication Flow

User Request

↓

Enter Registered Email

↓

Find User From MongoDB

↓

Generate OTP

↓

Send OTP Email

↓

Generate Kitkat Cookie

↓

Allow Password Reset Process


## Notes

- This API does not require authentication.
- OTP is sent only to registered email addresses.
- Kitkat cookie is used for password reset verification.
- User password is not changed through this API.

---

# API 9: Verify OTP


## API Name

Verify OTP API


## Purpose

This API is used to verify the OTP sent to the user's registered email during the password reset process.


## Method

POST


## Endpoint

```
POST /auth/verify-otp
```


## Authentication

No Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |


## Request Body

```json
{
    "email": "ankush@gmail.com",
    "otp": "123456"
}
```


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "OTP Verified Successfully"
}
```


## Cookie Generated

| Cookie Name | Purpose |
|------------|---------|
| Kitkat | Password Reset Authentication Token |


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "Email and OTP are required"
}
```


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Invalid OTP"
}
```


### 410 Gone

```json
{
    "success": false,
    "message": "OTP Expired"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

auth.controller.js


## Middleware Used

OTPAuthProtect Middleware


## Database Collection

users


## Database Operation

- Verify OTP with stored OTP
- Check OTP expiration time
- Confirm user identity
- Allow password reset access


## Service Used

- OTP Verification Service


## Authentication Flow

User Request

↓

Enter Email and OTP

↓

Verify OTP

↓

Check OTP Validity

↓

Generate Kitkat Cookie

↓

Allow Password Reset


## Notes

- OTP verification is required before changing password.
- OTP expires after a specific time period.
- Successful verification allows the user to reset password.
- Kitkat cookie is used for secure password reset authentication.

---


# API 3: User Login


## API Name

User Login API


## Purpose

This API is used to authenticate an existing user in the CRAVINGS application.

The user can login using registered email and password.


## Method

POST


## Endpoint

```
POST /auth/login
```


## Authentication

No Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |


## Request Body

```json
{
    "email": "ankush@gmail.com",
    "password": "123456"
}
```


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "Login Successfully",
    "user": {
        "id": "65f123456789",
        "fullName": "Ankush Singh",
        "email": "ankush@gmail.com"
    }
}
```


## Cookie Generated

| Cookie Name | Purpose |
|------------|---------|
| Oreo | User Authentication Token |


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "Email and Password are required"
}
```


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Invalid Email or Password"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

auth.controller.js


## Middleware Used

None


## Database Collection

users


## Database Operation

- Find user by email
- Verify password using bcrypt
- Generate JWT token
- Store authentication token in cookie


## Service Used

- Authentication Service


## Authentication Flow

User Request

↓

Enter Email and Password

↓

Find User From Database

↓

Compare Password

↓

Generate JWT Token

↓

Store Oreo Cookie

↓

Allow User Access


## Notes

- User login is performed using email and password.
- Password verification is handled using bcrypt.
- JWT token is generated after successful login.
- Oreo cookie stores authentication token.
- Protected APIs require valid authentication.

---

# API 4: User Logout


## API Name

User Logout API


## Purpose

This API is used to logout the authenticated user from the CRAVINGS application.

It removes the JWT authentication cookie and ends the user session.


## Method

POST


## Endpoint

```
POST /auth/logout
```


## Authentication

Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Cookie | Oreo Token |


## Request Body

None


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "Logout Successfully"
}
```


## Cookie Removed

| Cookie Name | Purpose |
|------------|---------|
| Oreo | User Authentication Token Removed |


## Error Response


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Unauthorized User"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

auth.controller.js


## Middleware Used

AuthProtect Middleware


## Database Collection

users


## Database Operation

- Verify authenticated user
- Remove JWT cookie
- Clear user session


## Service Used

- Authentication Service


## Authentication Flow

User Request

↓

Check Oreo Cookie

↓

Verify JWT Token

↓

Logout User

↓

Clear Oreo Cookie

↓

Send Response


## Notes

- Logout API requires user authentication.
- JWT token is removed from browser cookies.
- User session is terminated after successful logout.
- Protected APIs cannot be accessed after logout.

---

# API 5: Forgot Password


## API Name

Forgot Password API


## Purpose

This API is used when a user forgets their password.

The API sends an OTP to the user's registered email address for password reset verification.


## Method

POST


## Endpoint

```
POST /auth/forgot-password
```


## Authentication

No Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |


## Request Body

```json
{
    "email": "ankush@gmail.com"
}
```


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "OTP Sent Successfully"
}
```


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "Email is required"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

auth.controller.js


## Middleware Used

None


## Database Collection

users


## Database Operation

- Find user by email
- Generate OTP
- Store OTP with expiration time
- Send OTP to registered email


## Service Used

- Email Service
- OTP Generation Service


## Authentication Flow

User Request

↓

Enter Registered Email

↓

Find User From Database

↓

Generate OTP

↓

Store OTP With Expiry Time

↓

Send OTP Email

↓

Allow OTP Verification


## Notes

- OTP is sent only to registered email.
- OTP has a limited validity period.
- User must verify OTP before resetting password.
- This API starts the password reset process.

---

# API 6: Verify OTP


## API Name

Verify OTP API


## Purpose

This API is used to verify the OTP sent to the user's registered email during the password reset process.

After successful OTP verification, the user gets permission to reset the password.


## Method

POST


## Endpoint

```
POST /auth/verify-otp
```


## Authentication

No Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |


## Request Body

```json
{
    "email": "ankush@gmail.com",
    "otp": "123456"
}
```


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "OTP Verified Successfully"
}
```


## Cookie Generated

| Cookie Name | Purpose |
|------------|---------|
| Kitkat | Password Reset Authentication Token |


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "Email and OTP are required"
}
```


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Invalid OTP"
}
```


### 410 Gone

```json
{
    "success": false,
    "message": "OTP Expired"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

auth.controller.js


## Middleware Used

OTPAuthProtect Middleware


## Database Collection

users


## Database Operation

- Find user by email
- Compare entered OTP with stored OTP
- Check OTP expiration time
- Verify user identity
- Generate Kitkat cookie


## Service Used

- OTP Verification Service


## Authentication Flow

User Request

↓

Enter Email and OTP

↓

Find User From Database

↓

Verify OTP

↓

Check OTP Expiration

↓

Generate Kitkat Cookie

↓

Allow Password Reset


## Notes

- OTP verification is required before password reset.
- OTP expires after a specific time period.
- Kitkat cookie is generated after successful verification.
- User can reset password after OTP verification.

---

# API 7: Reset Password


## API Name

Reset Password API


## Purpose

This API is used to reset the user's password after successful OTP verification.

The user can create a new password using the password reset authentication token.


## Method

POST


## Endpoint

```
POST /auth/reset-password
```


## Authentication

Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Cookie | Kitkat Token |


## Request Body

```json
{
    "email": "ankush@gmail.com",
    "newPassword": "123456",
    "confirmPassword": "123456"
}
```


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "Password Reset Successfully"
}
```


## Cookie Removed

| Cookie Name | Purpose |
|------------|---------|
| Kitkat | Password Reset Authentication Token Removed |


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "All fields are required"
}
```


### 400 Bad Request

```json
{
    "success": false,
    "message": "Password and Confirm Password do not match"
}
```


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Password Reset Authentication Required"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

auth.controller.js


## Middleware Used

OTPAuthProtect Middleware


## Database Collection

users


## Database Operation

- Verify Kitkat cookie
- Find user by email
- Hash new password using bcrypt
- Update password in database
- Remove reset authentication token


## Service Used

- Password Reset Service


## Authentication Flow

User Request

↓

Verify Kitkat Cookie

↓

Enter New Password

↓

Validate Password

↓

Hash Password Using bcrypt

↓

Update Password In Database

↓

Clear Kitkat Cookie

↓

Send Response


## Notes

- Password reset requires successful OTP verification.
- New password is stored after bcrypt encryption.
- Kitkat cookie is removed after successful password reset.
- User can login with the new password.

---

# API 8: Change Password


## API Name

Change Password API


## Purpose

This API is used by authenticated users to change their existing password.

The user must provide the old password and a new password.


## Method

POST


## Endpoint

```
POST /auth/change-password
```


## Authentication

Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Cookie | Oreo Token |


## Request Body

```json
{
    "oldPassword": "123456",
    "newPassword": "654321",
    "confirmPassword": "654321"
}
```


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "Password Changed Successfully"
}
```


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "All fields are required"
}
```


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Old Password is Incorrect"
}
```


### 400 Bad Request

```json
{
    "success": false,
    "message": "New Password and Confirm Password do not match"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

auth.controller.js


## Middleware Used

AuthProtect Middleware


## Database Collection

users


## Database Operation

- Verify logged-in user
- Compare old password using bcrypt
- Hash new password
- Update password in database


## Service Used

- Password Management Service


## Authentication Flow

User Request

↓

Verify Oreo Cookie

↓

Authenticate User

↓

Check Old Password

↓

Hash New Password

↓

Update Password

↓

Send Response


## Notes

- User must be logged in to change password.
- Old password verification is required.
- New password is stored using bcrypt hashing.
- Oreo cookie is required for authentication.

---

# API 9: Verify OTP


## API Name

Verify OTP API


## Purpose

This API is used to verify the OTP sent to the user's registered email during the password reset process.

After successful OTP verification, the user gets permission to reset the password.


## Method

POST


## Endpoint

```
POST /auth/verify-otp
```


## Authentication

No Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |


## Request Body

```json
{
    "email": "ankush@gmail.com",
    "otp": "123456"
}
```


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "OTP Verified Successfully"
}
```


## Cookie Generated

| Cookie Name | Purpose |
|------------|---------|
| Kitkat | Password Reset Authentication Token |


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "Email and OTP are required"
}
```


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Invalid OTP"
}
```


### 410 Gone

```json
{
    "success": false,
    "message": "OTP Expired"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

auth.controller.js


## Middleware Used

OTPAuthProtect Middleware


## Database Collection

users


## Database Operation

- Find user by email
- Compare entered OTP with stored OTP
- Check OTP expiration time
- Verify user identity
- Generate Kitkat cookie


## Service Used

- OTP Verification Service


## Authentication Flow

User Request

↓

Enter Email and OTP

↓

Find User From Database

↓

Verify OTP

↓

Check OTP Expiration

↓

Generate Kitkat Cookie

↓

Allow Password Reset


## Notes

- OTP verification is required before resetting password.
- OTP expires after a limited time.
- Kitkat cookie is generated after successful OTP verification.
- User can reset password after OTP verification.

---

# API 10: Get User Profile


## API Name

Get User Profile API


## Purpose

This API is used to get the details of the currently authenticated user.

Only logged-in users can access their profile information.


## Method

GET


## Endpoint

```
GET /user/profile
```


## Authentication

Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Cookie | Oreo Token |


## Request Body

None


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "User Profile Fetch Successfully",
    "user": {
        "id": "65f123456789",
        "fullName": "Ankush Singh",
        "email": "ankush@gmail.com",
        "phone": "9999999999",
        "dob": "2002-04-20",
        "gender": "Male",
        "photo": "profile-image-url"
    }
}
```


## Error Response


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Unauthorized User"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

user.controller.js


## Middleware Used

AuthProtect Middleware


## Database Collection

users


## Database Operation

- Verify JWT token
- Find authenticated user
- Fetch user profile details
- Return user data


## Service Used

- User Profile Service


## Authentication Flow

User Request

↓

Send Oreo Cookie

↓

Verify JWT Token

↓

Find User From Database

↓

Fetch Profile Data

↓

Send Response


## Notes

- This API requires user authentication.
- User can only access their own profile.
- JWT token is verified using AuthProtect Middleware.
- No database update operation is performed.

---
# API 11: Edit User Profile


## API Name

Edit User Profile API


## Purpose

This API is used by authenticated users to update their profile information in the CRAVINGS application.

Users can update details like name, phone number, date of birth, gender and profile image.


## Method

PUT


## Endpoint

```
PUT /user/edit-profile
```


## Authentication

Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | multipart/form-data |
| Cookie | Oreo Token |


## Request Body

```json
{
    "fullName": "Ankush Singh Updated",
    "phone": "8888888888",
    "dob": "2002-04-20",
    "gender": "Male"
}
```


## File Upload

| Field Name | Type |
|------------|------|
| photo | Image File |


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "Profile Updated Successfully",
    "user": {
        "fullName": "Ankush Singh Updated",
        "phone": "8888888888",
        "dob": "2002-04-20",
        "gender": "Male"
    }
}
```


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "No Data Provided For Update"
}
```


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Unauthorized User"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

user.controller.js


## Middleware Used

AuthProtect Middleware


## Database Collection

users


## Database Operation

- Verify JWT token
- Find logged-in user
- Update user profile data
- Save updated user information
- Update profile image if provided


## Service Used

- User Profile Update Service
- Cloudinary Upload Service


## Authentication Flow

User Request

↓

Send Oreo Cookie

↓

Verify JWT Token

↓

Validate Profile Data

↓

Upload Image To Cloudinary

↓

Update User Data

↓

Save Changes

↓

Send Response


## Notes

- This API requires user authentication.
- User can update only their own profile.
- Profile image is uploaded using Cloudinary.
- Oreo cookie is required for authorization.
- Updated data is stored in users collection.

---

# API 12: Delete User Account


## API Name

Delete User Account API


## Purpose

This API is used to permanently delete the authenticated user's account from the CRAVINGS application.

Only logged-in users can delete their own account.


## Method

DELETE


## Endpoint

```
DELETE /user/delete-account
```


## Authentication

Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Cookie | Oreo Token |


## Request Body

None


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "User Account Deleted Successfully"
}
```


## Cookie Removed

| Cookie Name | Purpose |
|------------|---------|
| Oreo | User Authentication Token Removed |


## Error Response


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Unauthorized User"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

user.controller.js


## Middleware Used

AuthProtect Middleware


## Database Collection

users


## Database Operation

- Verify JWT Token
- Find authenticated user
- Delete user data from database
- Remove authentication cookie


## Service Used

- User Management Service


## Authentication Flow

User Request

↓

Send Oreo Cookie

↓

Verify JWT Token

↓

Find User From Database

↓

Delete User Account

↓

Clear Oreo Cookie

↓

Send Response


## Notes

- This API requires authentication.
- User account deletion is permanent.
- Oreo cookie is removed after successful deletion.
- Deleted user cannot access protected APIs.

---

# API 13: Contact Us


## API Name

Contact Us API


## Purpose

This API is used by users to send queries, feedback, complaints or messages to the CRAVINGS support team.


## Method

POST


## Endpoint

```
POST /common/contact-us
```


## Authentication

No Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |


## Request Body

```json
{
    "name": "Ankush Singh",
    "email": "ankush@gmail.com",
    "phone": "9999999999",
    "message": "I need help regarding my order"
}
```


## Success Response


### Status Code

```
201 Created
```


### Response

```json
{
    "success": true,
    "message": "Message Sent Successfully"
}
```


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "All fields are required"
}
```


### 400 Bad Request

```json
{
    "success": false,
    "message": "Invalid Email Format"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

common.controller.js


## Middleware Used

None


## Database Collection

contacts


## Database Operation

- Validate contact details
- Store user message
- Save contact request in database


## Service Used

- Email Service
- Contact Service


## Authentication Flow

User Request

↓

Enter Contact Details

↓

Validate Data

↓

Save Message In Database

↓

Send Confirmation Response


## Notes

- This API is available for all users.
- Authentication is not required.
- User queries are stored in contacts collection.
- Support team can review and respond to user messages.

---
---

# API 4: User Logout


## API Name

User Logout API


## Purpose

This API is used to logout the currently authenticated user from the CRAVINGS application.

It removes the authentication cookie and ends the user's session.


## Method

POST


## Endpoint

``` 
POST /auth/logout
```


## Authentication

Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Cookie | Oreo JWT Token |


## Request Body

None


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "Logout Successfully"
}
```


## Cookie Operation


| Cookie Name | Operation |
|------------|-----------|
| Oreo | Cookie Removed |


## Error Response


### 401 Unauthorized

```json
{
    "success": false,
    "message": "Unauthorized User"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Controller Used

auth.controller.js


## Middleware Used

AuthProtect Middleware


## Database Collection

None


## Database Operation

- Verify JWT token
- Remove Oreo authentication cookie
- End user session


## Service Used

Authentication Service


## Authentication Flow

User Logout Request

↓

Send Oreo Cookie

↓

AuthProtect Middleware

↓

Verify JWT Token

↓

Clear Oreo Cookie

↓

Send Logout Response


## Notes

- This API requires user authentication.
- Logout removes JWT token stored in Oreo cookie.
- No database operation is performed.
- After logout, protected APIs cannot be accessed without login.

---

---

# API 5: Forgot Password


## API Name

Forgot Password API


## Purpose

This API is used when a user forgets their password.

It sends an OTP to the registered email address for password reset verification.


## Method

POST


## Endpoint

```
POST /auth/forgot-password
```


## Authentication

No Authentication Required


## Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |


## Request Body

```json
{
    "email": "ankush@gmail.com"
}
```


## Success Response


### Status Code

```
200 OK
```


### Response

```json
{
    "success": true,
    "message": "OTP Sent Successfully"
}
```


## Error Response


### 400 Bad Request

```json
{
    "success": false,
    "message": "Email is required"
}
```


### 404 Not Found

```json
{
    "success": false,
    "message": "User not found"
}
```


### 500 Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```


## Cookie Generated


| Cookie Name | Purpose |
|------------|---------|
| Kitkat | Password Reset Authentication Token |


## Controller Used

auth.controller.js


## Middleware Used

None


## Database Collection

users


## Database Operation

- Find user by email
- Generate OTP
- Store OTP with expiry time
- Send OTP to registered email
- Start password reset process


## Service Used

- Email Service
- OTP Generation Service


## Authentication Flow

User Request

↓

Enter Registered Email

↓

Find User From MongoDB

↓

Generate OTP

↓

Send OTP Email

↓

Generate Password Reset Token

↓

Allow OTP Verification


## Notes

- This API does not require authentication.
- OTP is sent only to registered email addresses.
- OTP has limited validity time.
- User must verify OTP before resetting password.
- Kitkat cookie is used for password reset security.

---