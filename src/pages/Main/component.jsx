import { useState } from 'react';
import restaurants from '../../constants/mock';
import { Tab } from '../../components/Tab/component';
import { Restaurant } from '../../components/Restaurant/component';


export function MainPage() {
  const [restaurant, setRestaurant] = useState(restaurants.at(0));

  if (!restaurants?.length) {
    return null;
  }

  return (
    <div>
      {restaurants?.length > 0 && restaurants.map((rst) => (
        <Tab
          key={rst.id}
          title={rst.name}
          onClickFn={() => setRestaurant(rst)}
        />
      ))}
      <Restaurant restaurantObj={restaurant} />
    </div>
  );
}
