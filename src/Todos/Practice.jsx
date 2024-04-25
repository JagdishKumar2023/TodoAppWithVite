import React, { useState } from "react";

const Practice = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, isComplete: false }]);
    }
    setNewTask("");
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isComplete = !updatedTasks[index].isComplete;
    setTasks(updatedTasks);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <p>Total task: </p>
      <p>Completed tasks: </p>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="chekbox"
              checked={task.completed}
              onChange={handleToggleComplete(index)}
            />
            <span>{task.text}</span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter new task"
      />
      <br />
      <br />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default Practice;
