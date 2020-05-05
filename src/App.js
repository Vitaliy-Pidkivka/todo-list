import React from 'react';
import './App.scss';
import TodoListFooter from "./components/TodoListFooter/TodoListFooter";
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";
import TodoListHeader from "./components/TodoListHeader/TodoListHeader";
import styles from "./components/TodoListHeader/TodoListHeader.module.scss";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.newTaskTitleRef = React.createRef();
    }

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state)
        localStorage.setItem('our-state', stateAsString)
    }
    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: 'All'
        }
        let stateAsString = localStorage.getItem('our-state')
        if (stateAsString != null) {
            state = JSON.parse(stateAsString)
        }
        if( state.tasks.length !=0) {
            this.newTaskId = state.tasks.reduce((acc, i) => {
                return acc = i.id + 1
            })
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
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks
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
        window.state = this.state
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addNewTask={this.addNewTask}/>
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
            </div>
        );
    }
}



export default App;

