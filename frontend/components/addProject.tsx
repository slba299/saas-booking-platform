'use client';

import { useState } from 'react';

export default function AddProjectForm() {
  const [formData, setFormData] = useState({
    name: '',
    client: '',
    dueDate: '',
    description: '',
    status: '',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to add project.');

      setMessage('✅ Project added!');
      setFormData({ name: '', client: '', dueDate: '', description: '', status: '', budget: '' });
    } catch (error) {
      setMessage('❌ Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl p-4 border rounded">
      <h2 className="text-xl font-bold">Add New Project</h2>

      <input name="name" placeholder="Project Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded" />

      <input name="client" placeholder="Client" value={formData.client} onChange={handleChange} required className="w-full p-2 border rounded" />

      <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} className="w-full p-2 border rounded" />

      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" />

      <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
        <option value="">Select Status</option>
        <option value="Not started">Not started</option>
        <option value="In progress">In progress</option>
        <option value="Completed">Completed</option>
      </select>

      <input type="number" name="budget" placeholder="Budget" value={formData.budget} onChange={handleChange} className="w-full p-2 border rounded" />

      <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-4 py-2 rounded">
        {isSubmitting ? 'Submitting...' : 'Add Project'}
      </button>

      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
} 
