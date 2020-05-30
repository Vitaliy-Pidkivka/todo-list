import React from 'react';
import './App.scss';
import TodoList from "./components/TodoList/TodoList";
import AddNewItemForm from "./components/AddNewItemForm/AddNewItemForm";
import {connect} from "react-redux";
import {
    addNewTodoList, addTask, changeFilterValue, changeTask, removeTask, removeTodoList,
    setNewTodoListName
} from "./redux/appReducer";

class App extends React.Component {
    componentDidMount() {
        // this.restoreAppState();
    }

    // saveAppState = () => {
    //     let stateAsString = JSON.stringify(initialState)
    //     localStorage.setItem(`app-state`, stateAsString)
    // }
    // restoreAppState = () => {
    //     let state = {
    //         todoLists: [],
    //         newTodoListName: ''
    //     }
    //     let stateAsString = localStorage.getItem(`our-app-state`)
    //     if (stateAsString != null) {
    //         state = JSON.parse(stateAsString)
    //     }
    //     if (state.todoLists.length !== 0) {
    //         // eslint-disable-next-line
    //         state.todoLists.map(todo => {
    //             if (todo.id > this.newTodoListId) {
    //                 this.newTodoListId = todo.id
    //             }
    //         })
    //     } else {
    //         this.newTodoListId = 0
    //     }
    //     this.setState(state);
    // }
    changeNewTodoListName = (newName) => {
        this.props.setNewTodoListName(newName)
    }
    onKeyPressInputValue = (e) => {
        if (e.key === 'Enter') { this.props.addTodoList() }
    }
    render = () => {
        return (
            <div className="App">
                <AddNewItemForm onClick={this.props.addNewTodoList}
                                onChange={this.changeNewTodoListName}
                                onKeyPress={this.onKeyPressInputValue}
                                placeholder='Create new TodoList'
                                value={this.props.newTodoListName}
                />
                <div className='todoLists'>
                    {this.props.todoLists.map(tl =>
                        <TodoList todolistId={tl.id}
                                  title={tl.title}
                                  key={tl.id}
                                  removeTodoList={this.props.removeTodoList}
                                  removeTask={this.props.removeTask}
                                  changeTask={this.props.changeTask}
                                  addTask={this.props.addTask}
                                  tasks={tl.tasks}
                                  filterValue={tl.filterValue}
                                  changeFilterValue={this.props.changeFilterValue}
                        />)}

                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        todoLists: state.app.todoLists,
        newTodoListName: state.app.newTodoListName,
    }
}

export default connect(mapStateToProps, {
    addNewTodoList, setNewTodoListName,
    removeTodoList, addTask, removeTask, changeTask, changeFilterValue
})(App);

