import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        id: '',
        college: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.age || !formData.id || !formData.college || !formData.email) {
            alert('Please fill in all fields');
            return;
        }
        onAddStudent(formData);
        setFormData({
            name: '',
            age: '',
            id: '',
            college: '',
            email: ''
        });
    };

    return (
        <div className="card">
            <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="id">Student ID</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="e.g. S12345"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="e.g. 20"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="college">College</label>
                    <input
                        type="text"
                        id="college"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        placeholder="e.g. MIT"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                    />
                </div>

                <button type="submit" className="btn">Add Student</button>
            </form>
        </div>
    );
};

export default StudentForm;
