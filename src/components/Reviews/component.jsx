export function Reviews({ reviews }) {
  if (reviews?.length === 0) {
    return null;
  }

  return (
    <ul>
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
