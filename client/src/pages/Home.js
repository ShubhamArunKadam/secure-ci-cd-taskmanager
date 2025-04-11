import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://13.53.131.177:5000/api/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    await axios.post("http://13.53.131.177:5000/api/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
