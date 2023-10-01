import styles from './styles.module.css';

export function Reviews({ reviews }) {
  if (reviews?.length === 0) {
    return null;
  }

  return (
    <ul className={styles['review-container']}>
      {
        reviews.map((review) => (
          <li key={review.id}>
            <div>{review.text}</div>
          </li>
        ))
      }

    </ul>
  );
}
