"use client";

import { useState, useEffect } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('../api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const toggleTaskCompletion = async (id, completed) => {
    await fetch(`../api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !completed }),
    });

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !completed } : task
      )
    );
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id, task.completed)}
          />
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;