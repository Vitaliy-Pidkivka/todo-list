import React from 'react';
import styles from './TodoListHeader.module.scss';

class TodoListHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        error: false,
        title: ''
    }

    onAddTaskClick = (e) => {
        let taskText = this.state.title;
        this.setState({
            title: ''
        })
        let priority;
        let text;
        if (taskText.includes('::')) {
            let index = taskText.lastIndexOf('::');
            text = taskText.slice(0, index);
            priority = taskText.substring(taskText.length, index + 2)
        } else {
            text = taskText
            priority = 'low'
        }
        if (taskText === '') {
            this.setState({
                error: true
            })
            alert('Please write the task')
        } else {
            this.props.addNewTask(text, priority)
            this.setState({
                error: false
            })
        }
    }
    onKeyPressInputValue=(e)=>{
        if(e.key === 'Enter'){
            this.onAddTaskClick()
        }
    }
    onChangeInputValue=(e)=>{
        let newValue = e.target.value;
        this.setState({
            title: newValue
        })
    }
    render = () => {
        return (
            <div className={styles.todoList__header}>
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-header__title">Example: <br/> <h4>task::priority</h4></div>
                <div className="todoList-newTaskForm">
                    <input className={`${styles.header__input} ${this.state.error && styles.error}`}
                           type="text"
                           placeholder="New task name"
                           value={this.state.title}
                           onKeyPress={this.onKeyPressInputValue}
                           onChange={this.onChangeInputValue}
                    />
                    <button onClick={this.onAddTaskClick} className={styles.header__buttons}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader