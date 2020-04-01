import React from 'react';
import totoListFooterStyles from './TodoListFooter.module.css';

class TodoListFooter extends React.Component {
    render = () => {
        return (
            <div className={totoListFooterStyles.todoList__footer}>
                <button className={totoListFooterStyles.footer__buttons}>All</button>
                <button className={totoListFooterStyles.footer__buttons}>Completed</button>
                <button className={totoListFooterStyles.footer__buttons}>Active</button>
            </div>
        );
    }
}

export default TodoListFooter