'use client';
import { useEffect, useState } from 'react';

export default function GetStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/student')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Students List</h2>
      <ul>
        {students.map(s => (
          <li key={s.id} className="border p-2 mb-2">{s.name} - {s.age} - {s.email}</li>
        ))}
      </ul>
    </div>
  );
}
