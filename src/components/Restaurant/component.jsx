import { Menu } from '../Menu/component';
import { Reviews } from '../Reviews/component';

export function Restaurant({ restaurant }) {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu menuList={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>

  );
}
