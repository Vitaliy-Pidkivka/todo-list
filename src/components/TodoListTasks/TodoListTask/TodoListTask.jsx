import React from 'react';
import styles from './TodoListTask.module.scss';
import RemoveBtn from "../../shared/RemoveBtn/RemoveBtn";


class TodoListTask extends React.Component {
    state = {
        editMode: false,
    }
    onIsDoneChanged = (e) => {
        this.props.changeOldTask(this.props.task.id, {isDone: e.currentTarget.checked})
    }
    activateEditMode = () => {
        this.setState({editMode: true,})
    }
    disableEditMode = () => {
        this.setState({editMode: false,})
    }
    onTitleChanged = (e) => {
        this.props.changeOldTask(this.props.task.id, {title: e.currentTarget.value})
    }
    onRemoveTask = () => {
        this.props.removeTask(this.props.todolistId, this.props.task.id)
    }
    render = () => {
        console.log(this.props)
        return (
            <div className={`${styles.task} ${this.props.task.isDone && styles.done}`}
                 onDoubleClick={this.activateEditMode}
            >
                <div>
                    {!this.state.editMode && <div>
                        <input className={`${styles['checkbox']}`}
                               onChange={this.onIsDoneChanged}
                               type="checkbox"
                               checked={this.props.task.isDone}/>
                        <span>{this.props.task.id +
                        1}: {this.props.task.title}</span><span> - priority: {this.props.task.priority}</span>
                        <RemoveBtn onClick={this.onRemoveTask}/>
                    </div>}
                    {this.state.editMode && <div>
                        {this.props.task.id + 1}: <input type="text"
                                                         onBlur={this.disableEditMode}
                                                         onChange={this.onTitleChanged}
                                                         autoFocus={true}
                                                         value={this.props.task.title}

                    />
                    </div>}
                </div>

            </div>
        );
    }
}

export default TodoListTask;