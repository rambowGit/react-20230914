import { Menu } from '../Menu/component';
import { Reviews } from '../Reviews/component';
import { Card } from '../Card/component';
import { ReviewForm } from '../ReviewForm/component';
import { MenuContainer } from "../Menu/container";
import { ReviewsContainer } from "../Reviews/container";

export function Restaurant({ restaurant }) {
  return (
    <div>
      <Card hoverable>
        <div>
          <h2>{restaurant.name}</h2>
          {/* <Menu menu={restaurant.menu} />
          <Reviews reviews={restaurant.reviews} /> */}
          <MenuContainer restaurantId={restaurant.id} />
          <ReviewsContainer restaurantId={restaurant.id} />
          <ReviewForm />
        </div>
      </Card>
    </div>

  );
}
