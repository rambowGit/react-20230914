export function Reviews({ reviews }) {
  if (reviews?.length === 0) {
    return null;
  }

  const listItems = reviews.map((review) => (
    <li key={review.id}>
      <div>{review.text}</div>
    </li>
  ));

  return (
    <ul>
      {listItems}
    </ul>
  );
}
