export function ReviewList({ reviewList }) {
  if (!reviewList?.length === 0) {
    return null;
  }

  const listItems = reviewList.map((review) => (
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
