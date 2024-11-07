"use client";
import React, { useState } from 'react';
import Form from './Form';
import List from './List';

const ToDoApp = () => {
    const [tasks, setTasks] = useState([]);

    // Funktion til at tilføje en task
    function addTask(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const taskText = formData.get("task");
        
        const newTask = {
            id: crypto.randomUUID(),
            text: taskText,
            completed: false,
        };
        setTasks(tasks.concat(newTask));
        event.target.reset();
    }

    // Funktion til at slette en task
    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    // Funktion til at skifte status (toggle complete)
    function toggleComplete(id) {
        setTasks(tasks.map((task) => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    }

    return (
        <div>
            <h1>Todo App</h1>
            <Form addTask={addTask} />
            <List tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
        </div>
    );
};

export default ToDoApp;