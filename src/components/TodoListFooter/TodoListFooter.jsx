import React from 'react';
import styles from './TodoListFooter.module.scss';
import Button from "../shared/Button/Button";

class TodoListFooter extends React.Component {

    state = {
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
        this.setState({isHidden: false})
    }
    onHideFiltersClick = () => {
        this.setState({isHidden: true})
    }

    render = () => {
        return (
            <div className={styles.todoList__footer}>
                {!this.state.isHidden && <>
                    <Button onClick={this.onAllFilterClick}
                            value={'All'}
                            active={this.props.filterValue === "All"}/>
                    <Button onClick={this.onCompletedFilterClick}
                            value={'Completed'}
                            active={this.props.filterValue === "Completed"}/>
                    <Button onClick={this.onActiveFilterClick}
                            value={'Active'}
                            active={this.props.filterValue === "Active"}/>

                </>
                }
                <Button onClick={this.state.isHidden ? this.onShowFiltersClick : this.onHideFiltersClick}
                        value={this.state.isHidden ? 'Show' : 'Hide'}
                        active={this.props.filterValue === "hide"}/>
            </div>
        );
    }
}

export default TodoListFooter