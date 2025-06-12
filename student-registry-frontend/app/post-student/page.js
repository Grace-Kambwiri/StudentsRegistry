'use client';
import { useState } from 'react';

export default function PostStudent() {
  const [form, setForm] = useState({ name: '', age: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    alert('Student created!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input type="text" placeholder="Name" className="border p-2" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="number" placeholder="Age" className="border p-2" onChange={(e) => setForm({ ...form, age: e.target.value })} />
      <input type="email" placeholder="Email" className="border p-2" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
    </form>
  );
}
