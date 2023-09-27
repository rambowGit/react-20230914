import { MenuList } from '../MenuList/component';
import { ReviewList } from '../Reviews/component';

export function Restaurant({ restaurantObj }) {
  return (
    <div>
      <h1>{restaurantObj.name}</h1>
      <MenuList menuList={restaurantObj.menu} />
      <ReviewList reviewList={restaurantObj.reviews} />
    </div>

  );
}
