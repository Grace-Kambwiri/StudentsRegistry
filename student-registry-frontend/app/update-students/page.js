'use client';
import { useState } from 'react';

export default function UpdateStudent() {
  const [form, setForm] = useState({ id: '', name: '', age: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/student', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    alert('Student updated!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input type="number" placeholder="Student ID" className="border p-2" onChange={(e) => setForm({ ...form, id: e.target.value })} />
      <input type="text" placeholder="New Name" className="border p-2" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="number" placeholder="New Age" className="border p-2" onChange={(e) => setForm({ ...form, age: e.target.value })} />
      <input type="email" placeholder="New Email" className="border p-2" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <button type="submit" className="bg-yellow-500 text-white px-4 py-2">Update</button>
    </form>
  );
}
