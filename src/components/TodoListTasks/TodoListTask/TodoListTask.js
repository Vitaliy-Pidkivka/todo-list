import React from 'react';
import styles from './TodoListTask.module.scss';

class TodoListTask extends React.Component {
    state = {
        editMode: false,
    }
    onIsDoneChanged = (e) => {
        this.props.changeTask(this.props.task.id, {isDone: e.currentTarget.checked})
    }
    activateEditMode = (e) =>{
        this.setState({
            editMode: true,
        })
    }
    disableEditMode = (e) =>{
        this.setState({
            editMode: false,
        })
    }
    onTitleChanged =(e)=>{
        this.props.changeTask(this.props.task.id, {title:e.currentTarget.value})
    }
    render = () => {

        return (
            <div className={` ${this.props.task.isDone && styles.done}` }
           onDoubleClick={this.activateEditMode}
            >
                <div>
                    {!this.state.editMode &&  <div>
                        <input className={`${styles['checkbox']}`}
                               onChange={this.onIsDoneChanged}
                               type="checkbox"
                               checked={this.props.task.isDone}/>
                        <span>{this.props.task.id + 1}: {this.props.task.title}</span><span> - priority: {this.props.task.priority}</span>
                    </div>}
                    {this.state.editMode &&  <div>
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