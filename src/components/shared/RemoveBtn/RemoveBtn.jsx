import React from 'react';
import styles from "./RemoveBtn.module.scss";

class RemoveBtn extends React.Component {
    render() {
        return <button onClick={this.props.onClick}
                       className={`${styles["remove"]} ${this.props.className && this.props.className}`}>&times;</button>;
    }
}

export  default  RemoveBtn