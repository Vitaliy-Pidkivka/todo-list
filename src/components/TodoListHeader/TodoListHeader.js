import React from 'react';
import styles from './TodoListHeader.module.css';

class TodoListHeader extends React.Component {
    render = (props) => {
        return (
            <div className={styles.todoList__header}>
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={styles.header__input} type="text" placeholder="New task name"/>
                    <button  className={styles.header__buttons}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader