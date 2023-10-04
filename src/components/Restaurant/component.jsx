import { Menu } from '../Menu/component';
import { Reviews } from '../Reviews/component';
import { Card } from '../Card/component';
import { ReviewForm } from '../ReviewForm/component';

export function Restaurant({ restaurant }) {
  return (
    <div>
      <Card hoverable>
        <div>
          <h2>{restaurant.name}</h2>
          <Menu menu={restaurant.menu} />
          <Reviews reviews={restaurant.reviews} />
          <ReviewForm />
        </div>
      </Card>
    </div>

  );
}
