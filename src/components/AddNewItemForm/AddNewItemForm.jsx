import styles from "./AddNewItemForm.module.scss";
import React from "react";
import Button from "../shared/Button/Button";

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
                <Button value={'Add'} onClick={this.props.onClick}/>

            </div>
        )
    }
}

export default AddNewItemForm;
