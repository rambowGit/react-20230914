import { useState } from 'react';
import { Tab } from '../Tab/component';
import styles from './styles.module.css';

export function RestaurantTabs({ restaurants, onSelectTab }) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className={styles['tabs-container']}>
      {restaurants.map((restaurant, index) => (
        <Tab
          key={restaurant.id}
          title={restaurant.name}
          onClick={
            (event) => {
              setTabIndex(event);
              return onSelectTab(index);
            }
          }
          isActive={tabIndex === index}
          // передаем индекс текущего ресторана, чтобы TAB "знал", к какому ресторану он относится
          index={index}
        />
      ))}
    </div>

  );
}
