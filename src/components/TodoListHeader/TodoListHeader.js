import React from 'react';
import styles from './TodoListHeader.module.css';

class TodoListHeader extends React.Component {
    constructor(props) {
        super(props)
        this.newTaskTitleRef = React.createRef();
    }

    onAddTaskClick = (e) => {
        let newTaskText = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = '';
        let priority;
        let text;
        if (newTaskText.includes('::')) {
            let index = newTaskText.lastIndexOf('::');
            text = newTaskText.slice(0, index);
            priority = newTaskText.substring(newTaskText.length, index+2)
            console.log(text,priority)
        } else {
            text = newTaskText
            priority = 'low'
            console.log(text,priority)
        }
        this.props.addNewTask(text, priority)
    }
    render = (props) => {

        return (
            <div className={styles.todoList__header}>
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input ref={this.newTaskTitleRef} className={styles.header__input} type="text"
                           placeholder="New task name"/>
                    <button onClick={this.onAddTaskClick} className={styles.header__buttons}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader