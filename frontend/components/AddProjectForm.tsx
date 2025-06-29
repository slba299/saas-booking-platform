'use client'

import { useState } from 'react'

export default function AddProjectForm() {
  const [projectName, setProjectName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);

  try {
    const res = await fetch(`https://saas-backend-3h9g.onrender.com/api/projects',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: projectName,
        description,
        dueDate: (document.querySelector('input[type="date"]') as HTMLInputElement)?.value,
      }),
    });

    if (!res.ok) {
      throw new Error('Failed to add project');
    }

    setSuccess(true);
    setProjectName('');
    setDescription('');
    setLoading(false);
  } catch (error) {
    console.error('Error submitting project:', error);
    setLoading(false);
  }
};

Reply
      https://saas-backend-r3hg.onrender.com
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: projectName, description }),
      })

      if (res.ok) {
        setSuccess(true)
        setProjectName('')
        setDescription('')
      } else {
        alert('Something went wrong')
      }
    } catch (err) {
      console.error(err)
      alert('Server error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Project Name</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          rows={3}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? 'Submitting...' : 'Add Project'}
      </button>
      {success && <p className="text-green-600">Project added successfully!</p>}
    </form>
  )
}
