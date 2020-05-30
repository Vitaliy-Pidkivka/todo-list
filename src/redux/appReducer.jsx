const ADD_TODO_LIST = "todolist-application/App/ADD-TODO-LIST";
const SET_NEW_TODO_LIST_NAME = "todolist-application/App/SET-NEW-TODO-LIST-NAME";
const REMOVE_TODO_LIST = "todolist-application/App/REMOVE-TODO-LIST";
const ADD_TASK = "todolist-application/App/ADD-TASK";
const REMOVE_TASK = "todolist-application/App/REMOVE-TASK";
const CHANGE_TASK = "todolist-application/App/CHANGE-TASK";
const CHANGE_FILTER_VALUE = "todolist-application/App/CHANGE-FILTER-VALUE";

const initialState = {
    todoLists: [],
    newTodoListName: 'New TodoList',
    newTodoListId: 0,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO_LIST: {
            let newTodoLIst = {id: state.newTodoListId, title: state.newTodoListName, tasks: [], filterValue: 'All'}
            return {
                ...state,
                todoLists: [...state.todoLists, newTodoLIst],
                newTodoListName: '',
                newTodoListId: state.newTodoListId + 1
            }
        }
        case SET_NEW_TODO_LIST_NAME: {
            return {
                ...state,
                newTodoListName: action.name
            }
        }
        case REMOVE_TODO_LIST: {
            return {
                ...state,
                todoLists: state.todoLists.filter(todo => todo.id !== action.todoListId)
            }
        }
        case ADD_TASK: {
            return {
                ...state,
                todoLists: state.todoLists.map(todo => {
                    if (todo.id === action.todoListId) {
                        return {
                            ...todo,
                            tasks: [...todo.tasks, {
                                id: action.taskId,
                                title: action.taskTitle,
                                isDone: false,
                                priority: 'low'
                            }]
                        }
                    } else {
                        return todo
                    }
                })
            }
        }
        case  REMOVE_TASK: {
            return {
                ...state,
                todoLists: state.todoLists.map(todo => {
                    if (todo.id === action.todoListId) {
                        return {
                            ...todo,
                            tasks: todo.tasks.filter(task => task.id !== action.taskId)
                        }
                    } else {
                        return todo
                    }
                })
            }
        }
        case  CHANGE_TASK: {
            return {
                ...state,
                todoLists: state.todoLists.map(todo => {
                    if (todo.id === action.todoListId) {
                        return {
                            ...todo,
                            tasks: todo.tasks.map(task => {
                                if (task.id !== action.taskId) {
                                    return task;
                                } else {
                                    return {...task, ...action.obj};
                                }
                            })
                        }
                    } else {
                        return todo
                    }
                })
            }
        }
        case CHANGE_FILTER_VALUE: {
            return {
                ...state,
                todoLists: state.todoLists.map(todo => {
                    if (todo.id === action.todoListId) {

                        return {
                            ...todo,
                            filterValue: action.newFilterValue
                        }
                    } else {
                        return todo
                    }
                })
            }
        }
        default:
            return state

    }
}

export const addTodoList = () => ({type: ADD_TODO_LIST});
export const setNewTodoListName = (name) => ({type: SET_NEW_TODO_LIST_NAME, name});
export const removeTodoList = (todoListId) => ({type: REMOVE_TODO_LIST, todoListId});
export const addTask = (todoListId, taskId, taskTitle) => (
    {type: ADD_TASK, todoListId, taskId, taskTitle}
)
export const removeTask = (todoListId, taskId) => (
    {type: REMOVE_TASK, todoListId, taskId}
)
export const changeTask = (todoListId, taskId, obj) => ({
    type: CHANGE_TASK, todoListId, taskId, obj
})
export const changeFilterValue = (todoListId, newFilterValue) => {
    return {
        type: CHANGE_FILTER_VALUE,
        todoListId,
        newFilterValue
    }
}
const saveAppState = () => {
    let stateAsString = JSON.stringify(initialState)
    localStorage.setItem(`app-state`, stateAsString)
}
//thunk
export const addNewTodoList = () => dispatch => {
    dispatch(addTodoList());
}
export default appReducer
