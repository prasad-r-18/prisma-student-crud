<h1 align="center">🎓 Prisma Student CRUD</h1>

<p align="center">
  A minimal REST API for managing students, built with Express, Prisma and PostgreSQL.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/PostgreSQL-18-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL">
</p>

---

## ✨ Features

- Full CRUD for a `Student` (name, unique email, age)
- Input validation and clear HTTP error codes
- Database access only through Prisma Client
- Credentials kept in `.env`, never committed

## 🚀 Quick Start

```bash
# 1. Create the database (in psql)
CREATE DATABASE student_db;

# 2. Install dependencies
npm install

# 3. Add your connection string to a new .env file
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/student_db?schema=public"

# 4. Apply the migration
npx prisma migrate dev

# 5. Start the server
npm start
```

Server runs at `http://localhost:3000`.

## 📡 API Endpoints

| Method | Endpoint | Description | Body (JSON) |
|---|---|---|---|
| `POST` | `/students` | Create a student | `{"name":"Asha","email":"asha@example.com","age":20}` |
| `GET` | `/students` | List all students | none |
| `GET` | `/students/:id` | Get one student | none |
| `PUT` | `/students/:id` | Update a student | `{"name":"Asha K","email":"asha@example.com","age":21}` |
| `DELETE` | `/students/:id` | Delete a student | none |

## ⚠️ Error Codes

| Code | Meaning |
|---|---|
| `400` | Invalid input or id |
| `404` | Student not found |
| `409` | Email already exists |

## 🗂️ Structure

```
prisma-student-crud/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── index.js
└── package.json
```
