import React from 'react';
import styles from './TodoListTasks.module.scss';
import TodoListTask from "./TodoListTask/TodoListTask";



class TodoListTasks extends React.Component {

    render = () => {
        return (
            <div className={styles.TodoList__tasks}>
               {this.props.tasks.map((item) =>(
                   <TodoListTask  task={item}
                                  changeOldTask={this.props.changeOldTask}
                                  removeTask={this.props.removeTask}
                                  todolistId={this.props.todolistId}
                                  key={item.id}
                   />))}
            </div>
        );
    }
}

export default TodoListTasks;