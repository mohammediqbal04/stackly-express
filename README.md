# Stackly Express API

A Node.js backend application implementing CRUD operations with MongoDB and JWT-based authentication.

---

## Features

* User Registration & Login
* Password Hashing (bcrypt)
* JWT Authentication
* CRUD Operations (User)

---

## Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (jsonwebtoken)
* bcryptjs

---

## Setup Instructions

### 1. Clone Repo

```bash
git clone https://github.com/mohammediqbal04/stackly-express.git
cd stackly-express
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create `.env` file:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
```

### 4. Run Server

```bash
npm run dev
```

---

## Authentication

All protected routes require:

```
Authorization: Bearer <token>
```

---

## API Endpoints

### Auth

#### Register

POST `/api/auth/register`

Body:

```json
{
  "name": "Iqbal",
  "email": "iqbal@gmail.com",
  "password": "123456"
}
```

#### Login

POST `/api/auth/login`

---

### Users

#### Get All Users

GET `/api/users`

#### Get User By ID

GET `/api/users/:id`

#### Update User

PUT `/api/users/:id`

#### Delete User

DELETE `/api/users/:id`

---

## Error Handling

* 400 → Bad Request
* 401 → Unauthorized
* 404 → Not Found
* 500 → Server Error

---

## Sample Test Data

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456"
}
```

## Developed by

Mohammed Iqbal
