import React from 'react';
import styles from './TodoListHeader.module.scss';
import AddNewItemForm from "../AddNewItemForm/AddNewItemForm";
import RemoveBtn from "../shared/RemoveBtn/RemoveBtn";

class TodoListHeader extends React.Component {
    state = {
        error: false,
        value: ''
    }

    onAddTaskClick = () => {
        let taskText = this.state.value;
        this.setState({
            value: ''
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
            alert('Please write the task name')
        } else {
            this.props.addNewTask(text, priority)
            this.setState({
                error: false
            })
        }
    }
    onKeyPressInputValue = (e) => {
        if (e.key === 'Enter') {
            this.onAddTaskClick()
        }
    }
    onChangeInputValue = (value) => {
        this.setState({
            value: value
        })
    }
    onRemoveTodoList =()=>{
        this.props.removeTodoList(this.props.todolistId)
    }
    render = () => {
        return (
            <div className={styles.todoList__header}>
                <RemoveBtn onClick={this.onRemoveTodoList} className={styles['remove-task']}/>
                <h1 className="todoList-header__title">{this.props.title}</h1>
                <div className={styles.todoList__example} >Example:  <span >task::priority</span></div>
                <AddNewItemForm onClick={this.onAddTaskClick}
                                onChange={this.onChangeInputValue}
                                onKeyPress={this.onKeyPressInputValue}
                                value={this.state.value}
                                placeholder='Add new task'
                                error={this.state.error}
                />
            </div>
        );
    }
}

export default TodoListHeader