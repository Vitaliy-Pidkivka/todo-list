import React from 'react';
import styles from './TodoListTasks.module.css';
import TodoListTask from "./TodoListTask/TodoListTask";

class TodolistTasks extends React.Component {
    render = (props) => {

        const taskElements = this.props.tasks.map(item => <TodoListTask title={item.title} isDone={item.isDone} priority={item.priority} key={item.key}/>);
        return (
            <div className={styles.TodoList__tasks}>
               {taskElements}
            </div>
        );
    }
}

export default TodolistTasks;