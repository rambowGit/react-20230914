import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

export function Button({
  title, onClick, className, disabled,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
// TODO: перестало работать. Почему - непонятно.
        classNames(className, { [styles.disabled]: disabled })
}
      disabled={disabled}
    >
      {title}

    </button>
  );
}
