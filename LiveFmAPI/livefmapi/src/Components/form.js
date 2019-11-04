import React from 'react';
import Button from './Button';

const form = props => { 
    return (
        <div style={styles.div}>
        <form> 
            <p>Click submit twice I need to log the keys for search instead of submiting the form</p>
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