import classNames from 'classnames';
import { useContext } from 'react';
import styles from './styles.module.css';
import { ThemeContext } from '../../contexts/Theme';
import { Button } from '../Button/component';

export function Header({ title, className }) {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className={className}>
      <div
        className={styles.header}
      >
        <h2>{title}</h2>
        <p>ANYfOOD</p>
        <Button
          title="Theme"
          onClick={() => toggleTheme()}
          className={styles['theme-button']}
        />
      </div>
    </header>
  );
}
