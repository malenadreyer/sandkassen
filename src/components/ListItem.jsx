import React from 'react';

const ListItem = ({ task, deleteTask, toggleComplete }) => {
    return (
        <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
            <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? "Undo" : "Done"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default ListItem;