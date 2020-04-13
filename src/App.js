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
        toggleActiveBtn: 'All'
    }
    onAddTaskClick = () => {
        this.setState({
            tasks: [...this.state.tasks,
                {title: this.newTaskTitleRef.current.value, isDone: false, priority: 'low'}
            ]
        })
        this.newTaskTitleRef.current.value = ''
    }
    render = (props) => {
        return (
            <div className="App">
                <div className="todoList">
                    {/*<TodoListHeader/>*/}
                    <div className={styles.todoList__header}>
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input ref={this.newTaskTitleRef}  className={styles.header__input} type="text"
                                   placeholder="New task name"/>
                            <button  onClick={this.onAddTaskClick}  className={styles.header__buttons}>Add</button>
                        </div>
                    </div>
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.toggleActiveBtn}/>
                </div>
            </div>
        );
    }
}

export default App;

