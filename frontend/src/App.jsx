import React, { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const api = 'https://studentapp1-bf6r.onrender.com';
  
  const fetchStudents = async () => {
    try {
      // Fetch students from backend
      const response = await fetch(`${api}/api/students`);
      const data = await response.json();
      setStudents(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching students:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAddStudent = async (studentData) => {
    try {
      const response = await fetch(`${api}/api/students`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      if (response.ok) {
        fetchStudents(); // Refresh list
      }
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      const response = await fetch(`${api}/api/students/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchStudents(); // Refresh list
      }
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Student Data Store</h1>
        <p>Manage student records efficiently</p>
      </div>

      <div className="main-content">
        <StudentForm onAddStudent={handleAddStudent} />

        <div>
          <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Student List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <StudentList
              students={students}
              onDeleteStudent={handleDeleteStudent}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
