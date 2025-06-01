import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id} className="border p-2 mb-2">{project.name}</li>
        ))}
      </ul>
    </div>
  );
}