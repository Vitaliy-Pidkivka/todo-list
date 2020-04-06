import React from 'react';
import './App.css';
import TodoListFooter from "./components/TodoListFooter/TodoListFooter";
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";
import TodoListHeader from "./components/TodoListHeader/TodoListHeader";

class App extends React.Component {
    tasks= [
        {key: 0, title: 'CSS',isDone: true, priority: 'low',},
        {key: 1, title: 'JS',isDone: false, priority: 'medium',},
        {key: 2, title: 'ReactJS',isDone: false, priority: 'high',},
        {key: 3, title: 'Patterns',isDone: true, priority: 'low',},
        {key: 4, title: 'CSS',isDone: true, priority: 'low',},
        {key: 5, title: 'JS',isDone: false, priority: 'medium',},
        {key: 6, title: 'ReactJS',isDone: false, priority: 'high',},
        {key: 7, title: 'Patterns',isDone: true, priority: 'low',},
    ]
    toggleActiveBtn =  'All'
    render = (props) => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter filterValue={this.toggleActiveBtn}/>
                </div>
            </div>
        );
    }
}

export default App;

