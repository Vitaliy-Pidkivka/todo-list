import React from 'react';
import styles from './TodoListTasks.module.scss';
import TodoListTask from "./TodoListTask/TodoListTask";



class TodolistTasks extends React.Component {

    render = () => {
        const taskElements = this.props.tasks.map((item,index) =>(
        <TodoListTask  task={item}
                       changeTask={this.props.changeTask}
                       key={item.id}/>));
        return (
            <div className={styles.TodoList__tasks}>
               {taskElements}
            </div>
        );
    }
}

export default TodolistTasks;