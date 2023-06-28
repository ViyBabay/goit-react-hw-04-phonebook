import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={style.label}>
      <p className={style.parag}>Find contact by name</p>
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
