import React from 'react';
import styles from './TodoListFooter.module.scss';

class TodoListFooter extends React.Component {

    state={
        isHidden: false,
    }

    onAllFilterClick = () => {
        this.props.changeFilter('All')
    }
    onCompletedFilterClick = () => {
        this.props.changeFilter('Completed')
    }
    onActiveFilterClick = () => {
        this.props.changeFilter('Active')
    }
    onShowFiltersClick = () => {
        this.setState(
            {
                isHidden: false
            }
        )
    }
    onHideFiltersClick = () => {
        this.setState(
            {
                isHidden: true
            }
        )
    }


    render = () => {
        const classForAll = this.props.filterValue === "All" ? "footer__button-active" : "";
        const classForCompleted = this.props.filterValue === "Completed" ? "footer__button-active" : "";
        const classForActive = this.props.filterValue === "Active" ? "footer__button-active" : "";
        return (
            <div className={styles.todoList__footer}>
                { !this.state.isHidden  &&  <>
                    <button onClick={this.onAllFilterClick}
                            className={`${styles.footer__button} ${styles[classForAll]}`}>
                        All
                    </button>
                    <button onClick={this.onCompletedFilterClick}
                            className={`${styles.footer__button} ${styles[classForCompleted]}`}>
                        Completed
                    </button>
                    <button onClick={this.onActiveFilterClick } className={`${styles.footer__button} ${styles[classForActive]}`}>
                        Active
                    </button>
                </>
                }
                <button onClick={this.state.isHidden ? this.onShowFiltersClick : this.onHideFiltersClick}
                        className={`${styles.footer__button}`}>
                    {this.state.isHidden ? 'Show' : 'Hide'}
                </button>
            </div>
        );
    }
}

export default TodoListFooter