import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const handleToggleDone = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updated);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>📝 To-Do List</h1>
      <div style={styles.inputRow}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={handleAddTask} style={styles.addBtn}>Add</button>
      </div>

      <ul style={styles.taskList}>
        {tasks.map(task => (
          <li key={task.id} style={{ ...styles.taskItem, textDecoration: task.done ? 'line-through' : 'none' }}>
            <span onClick={() => handleToggleDone(task.id)} style={styles.taskText}>
              {task.text}
            </span>
            <button onClick={() => handleDelete(task.id)} style={styles.deleteBtn}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 🎨 Tiny styling magic (inline)
const styles = {
  container: { padding: 20, fontFamily: 'Arial', maxWidth: 400, margin: 'auto', textAlign: 'center' },
  inputRow: { display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 20 },
  input: { padding: 10, flex: 1 },
  addBtn: { padding: '10px 20px', cursor: 'pointer' },
  taskList: { listStyle: 'none', padding: 0 },
  taskItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  taskText: { cursor: 'pointer', flex: 1, textAlign: 'left' },
  deleteBtn: { marginLeft: 10, cursor: 'pointer' }
};

export default App;
