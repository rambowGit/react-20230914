import { UserContainer } from "../User/container";

export const Review = ({ review }) => {
  return (
    <div>
      {review.text} - <UserContainer userId={review.userId} />
    </div>
  );
};
