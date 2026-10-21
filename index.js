const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Validate body; returns error message or null
function validate({ name, email, age }) {
  if (typeof name !== "string" || !name.trim()) return "name is required";
  if (typeof email !== "string" || !email.includes("@")) return "valid email is required";
  if (!Number.isInteger(age) || age < 0) return "age must be a non-negative integer";
  return null;
}

// Parse :id; returns number or null
const parseId = (v) => (/^\d+$/.test(v) ? Number(v) : null);

// Create
app.post("/students", async (req, res) => {
  const error = validate(req.body);
  if (error) return res.status(400).json({ error });
  try {
    const { name, email, age } = req.body;
    const student = await prisma.student.create({ data: { name, email, age } });
    res.status(201).json(student);
  } catch (e) {
    if (e.code === "P2002") return res.status(409).json({ error: "email already exists" });
    res.status(500).json({ error: "server error" });
  }
});

// Get all
app.get("/students", async (req, res) => {
  try {
    res.json(await prisma.student.findMany({ orderBy: { id: "asc" } }));
  } catch (e) {
    res.status(500).json({ error: "server error" });
  }
});

// Get one
app.get("/students/:id", async (req, res) => {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ error: "invalid id" });
  try {
    const student = await prisma.student.findUnique({ where: { id } });
    if (!student) return res.status(404).json({ error: "student not found" });
    res.json(student);
  } catch (e) {
    res.status(500).json({ error: "server error" });
  }
});

// Update
app.put("/students/:id", async (req, res) => {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ error: "invalid id" });
  const error = validate(req.body);
  if (error) return res.status(400).json({ error });
  try {
    const { name, email, age } = req.body;
    const student = await prisma.student.update({ where: { id }, data: { name, email, age } });
    res.json(student);
  } catch (e) {
    if (e.code === "P2025") return res.status(404).json({ error: "student not found" });
    if (e.code === "P2002") return res.status(409).json({ error: "email already exists" });
    res.status(500).json({ error: "server error" });
  }
});

// Delete
app.delete("/students/:id", async (req, res) => {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ error: "invalid id" });
  try {
    await prisma.student.delete({ where: { id } });
    res.json({ message: "student deleted" });
  } catch (e) {
    if (e.code === "P2025") return res.status(404).json({ error: "student not found" });
    res.status(500).json({ error: "server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));