import React from 'react';
import styles from './TodoListTasks.module.css';

class TodolistTasks extends React.Component {
    render = () => {
        return (
            <div className={styles.TodoList__tasks}>
                <div className="todoList-task">
                    <input type="checkbox" checked={true}/>
                    <span>CSS</span>
                </div>
                <div className="todoList-task">
                    <input type="checkbox" checked={false}/>
                    <span>JS</span>
                </div>
                <div className="todoList-task">
                    <input type="checkbox" checked={false}/>
                    <span>ReactJS</span>
                </div>
                <div className="todoList-task">
                    <input type="checkbox" checked={true}/>
                    <span>Patterns</span>
                </div>
            </div>
        );
    }
}

export default TodolistTasks;