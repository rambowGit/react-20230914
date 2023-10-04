import classNames from 'classnames';
import styles from './styles.module.css';

export function Card({ hoverable, children }) {
  return (
    <div className={classNames(
      styles.card,
      {
        [styles.hoverable]: hoverable,
      },
    )}
    >
      {children}
    </div>

  );
}
