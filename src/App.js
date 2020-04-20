import React from 'react';
import './App.css';
import TodoListFooter from "./components/TodoListFooter/TodoListFooter";
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";
import TodoListHeader from "./components/TodoListHeader/TodoListHeader";
import styles from "./components/TodoListHeader/TodoListHeader.module.css";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.newTaskTitleRef = React.createRef();
    }

    state = {
        tasks: [
            {title: 'CSS', isDone: true, priority: 'low',},
            {title: 'JS', isDone: false, priority: 'medium',},
            {title: 'ReactJS', isDone: false, priority: 'high',},
            {title: 'Patterns', isDone: true, priority: 'low',},
        ],
        filterValue: 'All'
    }
    addNewTask = (newText, priority) => {

        let newTask = {title: newText, isDone: false, priority: priority}
        if (!newText) {
            alert("Please write the task name!")
        } else {
            let newTasks = [...this.state.tasks, newTask]
            this.setState({
                tasks: newTasks
            })
        }
    }
    onTaskChangeStatus = (task, isDone) => {

        let newTasks = this.state.tasks.map(item => {
            if (item !== task) {
                return item
            } else {
                return {...item, isDone: isDone}
            }
        })
        this.setState({
            tasks: newTasks
        })
    }

    changeFilter = (newFilterValue) => (this.setState({filterValue: newFilterValue}))
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
                        onTaskChangeStatus={this.onTaskChangeStatus}
                    />
                    <TodoListFooter filterValue={this.state.filterValue} changeFilter={this.changeFilter}/>
                </div>
            </div>
        );
    }
}

export default App;

