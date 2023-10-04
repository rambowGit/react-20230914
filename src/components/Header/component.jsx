import classNames from 'classnames';
import { useContext } from 'react';
import styles from './styles.module.css';
import { ThemeContext } from '../../contexts/Theme';
import { Button } from '../Button/component';

export function Header({ title, className, children }) {
  const { isDarkTheme, changeTheme } = useContext(ThemeContext);

  return (
    <header className={className}>
      <div className={classNames(
        styles['top-container'],
      )}
      >
        <p>ANYfOOD</p>
        <Button
          title="Theme"
          onClick={() => changeTheme(!isDarkTheme)}
          className={styles['theme-button']}
        />

      </div>
      <div
        className={styles.header}
      >
        <h2>{title}</h2>
        <div>
          {/* tabs menu */}
          {children}
        </div>
      </div>
    </header>
  );
}
