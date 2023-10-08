import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';
import { ThemeContext } from '../../contexts/Theme';

export function Button({
  title, onClick, className, disabled,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      onClick={onClick}
      className={
      // TODO: перестало работать. Почему - непонятно.
        classNames(className, {
          [styles.theme_default]: theme === 'default',
          [styles.theme_dark]: theme === 'dark',
        })
      }
      disabled={disabled}
    >
      {title}

    </button>
  );
}
