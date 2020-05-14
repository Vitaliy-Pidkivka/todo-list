import React from 'react';
import './App.scss';
import TodoList from "./components/TodoList/TodoList";
import AddNewItemForm from "./components/AddNewItemForm/AddNewItemForm";

class App extends React.Component {
    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state)
        localStorage.setItem(`our-app-state`, stateAsString)
    }
    restoreState = () => {
        let state = {
            todoLists: [],
            newTodoListName: ''
        }
        let stateAsString = localStorage.getItem(`our-app-state`)
        if (stateAsString != null) {
            state = JSON.parse(stateAsString)
        }
        if (state.todoLists.length !== 0) {
            this.newTodoListId = state.todoLists.length
        } else {
            this.newTodoListId = 0
        }
        this.setState(state);
    }
    newTodoListId = 0
    state = {
        todoLists: [],
        newTodoListName: 'Clear TodoList'
    }
    addNewTodoList = () => {
        let newTodoLIst = {
            id: this.newTodoListId + 1,
            title: this.state.newTodoListName
        }
        this.newTodoListId++
        this.setState({todoLists: [...this.state.todoLists, newTodoLIst], newTodoListName: ''}, () => this.saveState())
    }
    changeNewTodoListName = (newName) => {
        this.setState({newTodoListName: newName})
    }
    onKeyPressInputValue = (e) => {
        if (e.key === 'Enter') {
            this.addNewTodoList()
        }
    }
    removeTodoList =(todoListId) =>{
        let newTodoLists = this.state.todoLists.filter(todo => todo.id !== todoListId)
        this.setState({
            todoLists: newTodoLists
        },()=>{this.saveState()})
    }
    render = () => {
        window.state = this.state
        return (
            <div className="App">
                <AddNewItemForm onClick={this.addNewTodoList}
                                onChange={this.changeNewTodoListName}
                                onKeyPress={this.onKeyPressInputValue}
                                placeholder='Create new TodoList'
                                value={this.state.newTodoListName}

                               />
                               <div className='todoLists'>
                                   {this.state.todoLists.map(tl => <TodoList id={tl.id}
                                                                             title={tl.title}
                                                                             key={tl.id}
                                                                             removeTodoList={this.removeTodoList}
                                   />)}

                               </div>
            </div>
        );
    }
}


export default App;

