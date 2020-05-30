import React from 'react';
import TodoListFooter from "../TodoListFooter/TodoListFooter";
import TodoListTasks from "../TodoListTasks/TodoListTasks";
import TodoListHeader from "../TodoListHeader/TodoListHeader";

class TodoList extends React.Component {

    componentDidMount() {
        // this.restoreState();
    }

    // saveState = () => {
    //     let stateAsString = JSON.stringify(this.state)
    //     localStorage.setItem(`our-state ${this.props.id}`, stateAsString)
    // }
    // restoreState = () => {
    //     let state = {
    //         tasks: [],
    //         filterValue: 'All'
    //     }
    //     let stateAsString = localStorage.getItem(`our-state ${this.props.id}`)
    //     if (stateAsString != null) {
    //         state = JSON.parse(stateAsString)
    //     }
    //     if (state.tasks.length !== 0) {
    //         // eslint-disable-next-line
    //         state.tasks.map(task => {
    //             if(task.id >= this.newTaskId){
    //                 this.newTaskId = task.id + 1
    //                 return null
    //             }
    //         })
    //     } else {
    //         this.newTaskId = 0
    //     }
    //     this.setState(state);
    // }
    addNewTask = (newText) => {
        let newId = this.props.tasks.length || 0
        this.props.tasks.map(item => {
            if (item.id >= newId) { newId = item.id + 1 }
        })
        this.props.addTask(this.props.todolistId, newId, newText)
    };
    changeOldTask = (taskId, obj) => {
        this.props.changeTask(this.props.todolistId, taskId, obj)
    };
    changeFilter = (newFilterValue) => {
        this.props.changeFilterValue(this.props.todolistId, newFilterValue)
    };

    render = () => {
        return (
            <div className="todoList">
                <TodoListHeader title={this.props.title}
                                addNewTask={this.addNewTask}
                                removeTodoList={this.props.removeTodoList}
                                todolistId={this.props.todolistId}
                />
                <TodoListTasks
                    tasks={this.props.tasks.filter(task => {
                        switch (this.props.filterValue) {
                            case 'All':
                                return true;
                            case 'Active':
                                return !task.isDone;
                            case 'Completed':
                                return task.isDone;
                            default:
                                return true;
                        }
                    })}
                    changeOldTask={this.changeOldTask}
                    removeTask={this.props.removeTask}
                    todolistId={this.props.todolistId}
                />
                <TodoListFooter filterValue={this.props.filterValue}
                                changeFilter={this.changeFilter}
                />
            </div>
        );
    };
}


export default TodoList;

