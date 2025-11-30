const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let students = [];

// Get all students
app.get('/api/students', (req, res) => {
    res.json(students);
});

// Add a student
app.post('/api/students', (req, res) => {
    const student = req.body;
    // Simple validation
    if (!student.name || !student.age || !student.id || !student.college || !student.email) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    students.push(student);
    res.status(201).json(student);
});

// Delete a student (optional but good for a store)
app.delete('/api/students/:id', (req, res) => {
    const { id } = req.params;
    students = students.filter(s => s.id !== id);
    res.json({ message: 'Student deleted' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
