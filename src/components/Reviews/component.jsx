import styles from './styles.module.css';

export function Reviews({ reviews }) {
  if (reviews?.length === 0) {
    return null;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul className={styles['review-container']}>
        {
        reviews.map((review) => (
          <li key={review.id}>
            <div>{review.text}</div>
          </li>
        ))
      }

      </ul>
    </div>

  );
}
