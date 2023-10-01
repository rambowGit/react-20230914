import { useState } from 'react';
import restaurants from '../../constants/mock';
import { RestaurantTabs } from '../../components/RestaurantTabs/component';
import { Restaurant } from '../../components/Restaurant/component';
import { SiteHeader } from '../../components/SiteHeader/component';
import { SiteFooter } from '../../components/SiteFooter/component';
import styles from './styles.module.css';

import { LoremComponent } from '../../components/LoremComponent/component';

export function MainPage() {
  const [restaurantActivTabIndex, setActivTabIndex] = useState(0);

  if (restaurants.length === 0) {
    return null;
  }

  return (
    <div>
      <SiteHeader
        title="Restaurants"
        height={100}
      >
        <RestaurantTabs
          restaurants={restaurants}
          onSelectTab={setActivTabIndex}
        />
      </SiteHeader>
      <div className={styles.wrapper}>
        <Restaurant restaurant={restaurants[restaurantActivTabIndex]} />
        <LoremComponent />
      </div>

      <SiteFooter content="Simple footer" />
    </div>
  );
}
