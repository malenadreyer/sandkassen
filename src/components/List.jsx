import React from 'react';
import ListItem from './ListItem';

const List = ({ tasks, deleteTask, toggleComplete }) => {
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {tasks.filter(task => !task.completed).map(task => (
                    <ListItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </ul>

            <h2>Completed List</h2>
            <ul>
                {tasks.filter(task => task.completed).map(task => (
                    <ListItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
        </div>
    );
};

export default List;