import React from 'react';
import './App.css';
import TodoListFooter from "./components/TodoListFooter/TodoListFooter";
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";
import TodoListHeader from "./components/TodoListHeader/TodoListHeader";

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>
                    <TodoListTasks/>
                    <TodoListFooter/>
                </div>
            </div>
        );
    }
}

export default App;

