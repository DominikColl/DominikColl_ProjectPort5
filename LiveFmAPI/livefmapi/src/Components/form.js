import React from 'react';
import Button from './Button';

const form = props => { 
    return (
        <div style={styles.div}>
        <form> 
            <h2>Must choose button to filter search </h2>
            <ul>
                {/* will switch to button component */}
                <li><button style={styles.input} onClick={props.btnClick} type='button' id='artistButton'>Artist</button></li>
                <li><button style={styles.input} onClick={props.btnClick}type='button' id='songButton'>Song</button></li>
                <li><button style={styles.input} onClick={props.btnClick}type='button' id='albumButton'>Album</button></li>
            </ul>
            <h2>Search</h2>
            <input style={styles.input}type='text'></input>
             <Button string='Search' onClick={props.click}/>
        </form>
        </div>
      );
}
const styles={
    input:{
        padding:'1rem',
    },
    div:{
        marginTop:'1rem',
    }
}
export default form;