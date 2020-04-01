import React from 'react';
import totoListFooterStyles from './TodoListFooter.module.css';

class TodoListFooter extends React.Component {
    render = () => {
        return (
            <div className={totoListFooterStyles.todoList__footer}>
                <button>All</button>
                <button>Completed</button>
                <button>Active</button>
            </div>
        );
    }
}

export default TodoListFooter