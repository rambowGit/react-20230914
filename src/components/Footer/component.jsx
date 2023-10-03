import classNames from 'classnames';
import styles from './styles.module.css';

export function Footer({ text, className }) {
  return (
    <footer className={classNames(
      className,
      styles.footer,
    )}
    >
      <p className={styles['content-container']}>{text}</p>
    </footer>

  );
}
