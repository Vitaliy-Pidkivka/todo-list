import React from 'react';
import TodoListFooter from "../TodoListFooter/TodoListFooter";
import TodoListTasks from "../TodoListTasks/TodoListTasks";
import TodoListHeader from "../TodoListHeader/TodoListHeader";

class TodoList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.restoreState();
    }
    saveState = () => {
        let stateAsString = JSON.stringify(this.state)
        localStorage.setItem(`our-state ${this.props.id}`, stateAsString)
    }
    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: 'All'
        }
        let stateAsString = localStorage.getItem(`our-state ${this.props.id}`)
        if (stateAsString != null) {
            state = JSON.parse(stateAsString)
        }
        if( state.tasks.length != 0) {
            this.newTaskId = state.tasks.length
        } else {
            this.newTaskId = 0
        }
        this.setState(state);
    }
    state = {
        tasks: [],
        filterValue: 'All'
    }
    newTaskId = 0
    addNewTask = (newText, priority) => {
        let newTask = {id: this.newTaskId, title: newText, isDone: false, priority: priority}
        this.newTaskId++
        this.setState({
            tasks: [...this.state.tasks, newTask]
        },() => this.saveState())
    }
    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(task => {
            if (task.id !== taskId) {
                return task
            } else {
                return {...task, ...obj}
            }
        })
        this.setState({
            tasks: newTasks
        },() => this.saveState())

    }
    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue},() => this.saveState())
    }
    render = () => {
        return (
                <div className="todoList">
                    <TodoListHeader title={this.props.title} addNewTask={this.addNewTask}/>
                    <TodoListTasks
                        tasks={this.state.tasks.filter(task => {
                            switch (this.state.filterValue) {
                                case 'All':
                                    return true
                                case 'Active':
                                    return !task.isDone
                                case 'Completed':
                                    return task.isDone
                                default:
                                    return true
                            }
                        })}
                        changeTask={this.changeTask}
                    />
                    <TodoListFooter filterValue={this.state.filterValue}
                                    changeFilter={this.changeFilter}/>
                </div>
        );
    }
}



export default TodoList;

