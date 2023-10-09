import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';
import { ThemeContext } from '../../contexts/Theme';

export function Button({
  title, onClick, className, disabled, type,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={
        classNames(className, {
          [styles.theme_default]: theme === 'default',
          [styles.theme_dark]: theme === 'dark',
        })
      }
      disabled={disabled}
    >
      <div className={
        classNames(className, {
          [styles.disabled]: disabled === true,
        })
      }
      >
        {title}
      </div>

    </button>
  );
}
