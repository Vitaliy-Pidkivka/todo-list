import React from 'react';
import styles from './TodoListFooter.module.css';

class TodoListFooter extends React.Component {
    render = (props) => {
        const  classForAll = this.props.filterValue === "All" ? "footer__button-active" : "";
        const  classForCompleted = this.props.filterValue === "Completed" ? "footer__button-active" : "";
        const  classForActive = this.props.filterValue === "Active" ? "footer__button-active" : "";
        return (
            <div className={styles.todoList__footer}>
                <button className={`${styles.footer__button} ${styles[classForAll]}`}>All</button>
                <button className={`${styles.footer__button} ${styles[classForCompleted]}`}>Completed</button>
                <button className={`${styles.footer__button} ${styles[classForActive]}`}>Active</button>
            </div>
        );
    }
}

export default TodoListFooter