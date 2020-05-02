import React from 'react';
import classes from './Input.module.css';

const Input = props => {
  return (
    <>
      <input
        className={classes.Input}
        onChange={props.changed}
        value={props.search}
        type="text"
        placeholder="What are you looking for?"
      />
    </>
  );
};

export default Input;
