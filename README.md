<h1 align="center">🎓 Prisma Student CRUD</h1>

<p align="center">
  A minimal REST API for managing students, built with Express.js, Prisma ORM, and PostgreSQL.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/PostgreSQL-18-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL">
</p>

---

## ✨ Features

* Full CRUD operations for students.
* Input validation and appropriate HTTP status codes.
* Database operations handled through Prisma Client.
* Duplicate email detection.
* Environment variables for database credentials.
* Error handling for database operations.

## 🛠️ Tech Stack

* Node.js
* Express.js
* Prisma ORM 6
* PostgreSQL
* Postman

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/prasad-r-18/prisma-student-crud.git
cd prisma-student-crud
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create the database

Create a PostgreSQL database named `student_db` if it doesn't already exist.

```sql
CREATE DATABASE student_db;
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/student_db?schema=public"
```

Replace `USER` and `PASSWORD` with your PostgreSQL credentials.

Never commit your actual `.env` file to GitHub.

### 5. Apply database migrations

```bash
npx prisma migrate dev
```

### 6. Generate Prisma Client

```bash
npx prisma generate
```

### 7. Start the server

```bash
npm start
```

The server runs at:

`http://localhost:3000`

## 📡 API Endpoints

| Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| POST   | `/students`     | Create a student         |
| GET    | `/students`     | Retrieve all students    |
| GET    | `/students/:id` | Retrieve a student by ID |
| PUT    | `/students/:id` | Update a student         |
| DELETE | `/students/:id` | Delete a student         |

### Example: Create a student

**POST** `/students`

Request body:

```json
{
  "name": "Asha",
  "email": "asha@example.com",
  "age": 20
}
```

### Example: Update a student

**PUT** `/students/1`

Request body:

```json
{
  "name": "Asha K",
  "email": "asha@example.com",
  "age": 21
}
```

## ⚠️ HTTP Error Codes

| Code | Meaning                      |
| ---- | ---------------------------- |
| 201  | Student created successfully |
| 400  | Invalid input or ID          |
| 404  | Student not found            |
| 409  | Email already exists         |
| 500  | Internal server error        |

## 🗂️ Project Structure

```text
prisma-student-crud/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## 🧠 Prisma Concepts Demonstrated

* **Schema:** Defines the Student model and its fields.
* **Migration:** Applies database schema changes.
* **Prisma Client:** Interacts with PostgreSQL without manually writing SQL for each CRUD operation.
* **CRUD:** Creates, reads, updates, and deletes student records.

---

<p align="center">
  Built to learn Prisma ORM with Express.js and PostgreSQL.
</p>
