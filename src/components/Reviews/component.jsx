import { ReviewContainer } from "../Review/container";
import styles from './styles.module.css';

export function Reviews({ reviews }) {
  if (reviews?.length === 0) {
    return null;
  }
  
  console.log('reviews ', reviews);

  return (
    <div>
      <h3>Reviews</h3>
      <ul className={styles['review-container']}>
        {
        reviews.map((id) => (
          <li key={id}>
            <ReviewContainer reviewId={id} />
          </li>
        ))
      }

      </ul>
    </div>

  );
}
