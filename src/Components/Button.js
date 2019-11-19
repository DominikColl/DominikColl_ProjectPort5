import React from 'react';
import './style.css'
const Button = props => {
    return (<button id='searchBut' type='button' onClick={props.onClick} style={styles.button}>{props.string}</button>);
}
export default Button;
const styles = {
    button: {
        padding: '.9rem',
    }
}