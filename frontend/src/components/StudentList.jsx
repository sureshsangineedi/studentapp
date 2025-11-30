import React from 'react';

const StudentList = ({ students, onDeleteStudent }) => {
    if (students.length === 0) {
        return (
            <div className="card empty-state">
                <h3>No students found</h3>
                <p>Add a student to get started.</p>
            </div>
        );
    }

    return (
        <div className="student-list">
            {students.map((student) => (
                <div key={student.id} className="student-card">
                    <div className="student-info">
                        <h3>{student.name}</h3>
                        <div className="student-details">
                            <span>ID: {student.id}</span>
                            <span>Age: {student.age}</span>
                            <span>College: {student.college}</span>
                            <span>Email: {student.email}</span>
                        </div>
                    </div>
                    <button
                        className="delete-btn"
                        onClick={() => onDeleteStudent(student.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default StudentList;
