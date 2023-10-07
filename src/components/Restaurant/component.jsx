import { Menu } from '../Menu/component';
import { Reviews } from '../Reviews/component';
import { Card } from '../Card/component';

export function Restaurant({ restaurant }) {
  return (
    <Card>
      <div>
        <h2>{restaurant.name}</h2>
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
      </div>
    </Card>

  );
}
