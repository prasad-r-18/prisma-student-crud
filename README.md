# prisma-student-crud

Minimal Student CRUD API with Node.js, Express, Prisma 6, and PostgreSQL.

## Setup

1. Create the database:
```sql
   CREATE DATABASE student_db;
```
2. Install dependencies:
```bash
   npm install
```
3. Create a `.env` file in the project root:
```
   DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/student_db?schema=public"
```
4. Apply the migration:
```bash
   npx prisma migrate dev
```
5. Start the server:
```bash
   npm start
```

Server runs at `http://localhost:3000`.

## Endpoints (Postman)

| Method | URL | Body (JSON) |
|---|---|---|
| POST | `/students` | `{"name":"Asha","email":"asha@example.com","age":20}` |
| GET | `/students` | none |
| GET | `/students/:id` | none |
| PUT | `/students/:id` | `{"name":"Asha K","email":"asha@example.com","age":21}` |
| DELETE | `/students/:id` | none |

## Errors

- `400` invalid input or id
- `404` student not found
- `409` email already exists