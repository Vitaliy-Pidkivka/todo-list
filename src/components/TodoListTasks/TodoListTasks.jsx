import React from 'react';
import styles from './TodoListTasks.module.scss';
import TodoListTask from "./TodoListTask/TodoListTask";



class TodoListTasks extends React.Component {

    render = () => {
        const taskElements = this.props.tasks.map((item) =>(
        <TodoListTask  task={item}
                       changeTask={this.props.changeTask}
                       removeTask={this.props.removeTask}
                       key={item.id}/>));
        return (
            <div className={styles.TodoList__tasks}>
               {taskElements}
            </div>
        );
    }
}

export default TodoListTasks;