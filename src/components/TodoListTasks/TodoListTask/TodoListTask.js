import React from 'react';
import styles from './TodoListTask.module.css';

class TodoListTask extends React.Component {

    onIsDoneChanged = (e)=>{
        this.props.onTaskChangeStatus(this.props.task, e.currentTarget.checked)
    }
    render = (props) => {

        return (
                <div className="todoList-task">
                    <input className={styles['checkbox']} onChange={this.onIsDoneChanged} type="checkbox" checked={this.props.task.isDone}/>
                    <span>{this.props.task.title}</span><span>, priority: {this.props.task.priority}</span>
                </div>
        );
    }
}

export default TodoListTask;