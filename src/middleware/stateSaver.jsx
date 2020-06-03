export const stateSaver = (store) => (next) => (action) => {
    next(action)
    let stateAsString = JSON.stringify(store.getState().app)
    localStorage.setItem(`app-state`, stateAsString)
}