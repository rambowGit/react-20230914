import classNames from 'classnames';
import styles from './styles.module.css';

export function Header({ title, className, children }) {
  return (
    <header className={className}>
      <div className={classNames(
        styles['top-container'],
      )}
      >
        <p>ANYfOOD</p>
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
