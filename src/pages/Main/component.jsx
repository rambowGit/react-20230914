import { useState } from 'react';
import restaurants from '../../constants/mock';
import { RestaurantTabs } from '../../components/RestaurantTabs/component';
import { Restaurant } from '../../components/Restaurant/component';
import { Header } from '../../components/Header/component';
import { Footer } from '../../components/Footer/component';
import { ThemeProvider } from '../../contexts/Theme';
import styles from './styles.module.css';

export function MainPage() {
  const [restaurantActivTabIndex, setActivTabIndex] = useState(0);

  if (restaurants.length === 0) {
    return null;
  }

  return (
    <ThemeProvider>
      <div className={styles.root}>
        <Header
          title="Restaurants"
          className={styles.header}
        >
          <RestaurantTabs
            restaurants={restaurants}
            onSelectTab={setActivTabIndex}
          />
        </Header>
        <div className={styles['content-container']}>
          <Restaurant restaurant={restaurants[restaurantActivTabIndex]} />
        </div>
        <Footer
          text="Simple footer"
          className={styles.footer}
        />
      </div>
    </ThemeProvider>

  );
}
