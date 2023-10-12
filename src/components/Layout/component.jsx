import classNames from 'classnames';
import { Header } from '../Header/component';
import { Footer } from '../Footer/component';
import styles from './styles.module.css';

export function Layout({ children }) {
  return (
    <div className={classNames(styles.root)}>
      <Header className={styles.header} />
      <div className={styles['content-container']}>
        {children}
      </div>
      <Footer className={styles.footer} />
    </div>
  );
}
