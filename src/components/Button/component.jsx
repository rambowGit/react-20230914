import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

export function Button({ title, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles['product-button'],
        {
          [styles.disabled]: disabled,
        },
      )}
    >
      {title}

    </button>
  );
}
