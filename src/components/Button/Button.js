import React from 'react';
import classes from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Button = () => {
  return (
    <>
      <button type="submit" className={classes.Button}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </>
  );
};

export default Button;
