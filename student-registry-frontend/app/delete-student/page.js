'use client';
import { useState } from 'react';

export default function DeleteStudent() {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/student', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    alert('Student deleted!');
  };

  return (
    <form onSubmit={handleDelete} className="p-4 space-y-4">
      <input type="number" placeholder="Student ID" className="border p-2" onChange={(e) => setId(e.target.value)} />
      <button type="submit" className="bg-red-500 text-white px-4 py-2">Delete</button>
    </form>
  );
}
