import styles from "./AddNewItemForm.module.scss";
import React from "react";

class AddNewItemForm extends React.Component {
    onChangeInputValue = (e) => {
        let newInputValue = e.currentTarget.value
        this.props.onChange(newInputValue)
    }

    render() {
        return (
            <div className={styles.addNewItemForm}>
                <input className={`${styles.addNewItemForm__input} ${this.props.error && styles.error}`}
                       type="text"
                       placeholder={this.props.placeholder}
                       value={this.props.value}
                       onKeyPress={this.props.onKeyPress}
                       onChange={this.onChangeInputValue}
                />
                <button onClick={this.props.onClick} className={styles.addNewItemForm__buttons}>Add</button>
            </div>
        )
    }
}

export default AddNewItemForm;
