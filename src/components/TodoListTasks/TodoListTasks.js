import React from 'react';
import styles from './TodoListTasks.module.css';
import TodoListTask from "./TodoListTask/TodoListTask";



class TodolistTasks extends React.Component {

    render = (props) => {
        const taskElements = this.props.tasks.map((item,index) =>(
        <TodoListTask  task={item} onTaskChangeStatus={this.props.onTaskChangeStatus} key={index}/>));
        return (
            <div className={styles.TodoList__tasks}>
               {taskElements}
            </div>
        );
    }
}

export default TodolistTasks;