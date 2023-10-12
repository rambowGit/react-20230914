import { useState } from 'react';
import restaurants from '../../constants/mock';
import { RestaurantTabs } from '../../components/RestaurantTabs/component';
import { Restaurant } from '../../components/Restaurant/component';
import { Layout } from '../../components/Layout/component';

export function MainPage() {
  const [restaurantActivTabIndex, setActivTabIndex] = useState(0);

  if (restaurants.length === 0) {
    return null;
  }

  return (
    <Layout>
      <RestaurantTabs
        restaurants={restaurants}
        onSelectTab={setActivTabIndex}
      />
      <Restaurant restaurant={restaurants[restaurantActivTabIndex]} />
    </Layout>
  );
}
