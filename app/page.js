"use client";

import { useState } from 'react';
import TaskList from './components/TaskList';

export default function Home() {
  const [title, setTitle] = useState('');

  const addTask = async () => {
    if (title.trim() === '') {
      return;
    }

    try {
      const response = await fetch('/api/tasks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setTitle('');
    } catch (error) {
      console.error('Fehler beim Hinzufügen der Aufgabe:', error);
    }
  };

  return (
    <div>
      <h1>Aufgabenliste</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Aufgabe hinzufügen</button>
      <TaskList />
    </div>
  );
}