
import React from 'react';

const Form = ({ addTask }) => {
    return (
        <form onSubmit={addTask}>
            <input type="text" name="task" placeholder="Add a new task" required />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default Form;