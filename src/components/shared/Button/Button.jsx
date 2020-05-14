import styles from "./Button.module.scss";
import React from "react";


class Button extends React.Component {
    render() {
        return <button onClick={this.props.onClick}
                       className={`${styles.button} ${this.props.active && styles.active }
                        ${this.props.className && this.props.className}`}>
            {this.props.value}
        </button>;
    }
}

export default Button

