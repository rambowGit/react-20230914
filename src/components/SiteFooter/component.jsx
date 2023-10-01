import styles from './styles.module.css';

export function SiteFooter({ content }) {
  return (
    <footer className={styles.footer}>
      <p className={styles['content-container']}>{content}</p>
    </footer>

  );
}
