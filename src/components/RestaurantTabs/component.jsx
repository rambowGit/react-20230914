import { RestaurantTabContainer } from "../RestarauntTab/container";
import styles from './styles.module.css';

export function RestaurantTabs({ 
  activeRestaurantId,
  onTabSelect,
  restaurantIds,
 }) {

  return (
    <div className={styles['tabs-container']}>
     {restaurantIds.map((id) => (
        <RestaurantTabContainer
          key={id}
          restaurantId={id}
          isActive={id === activeRestaurantId}
          onClick={() => onTabSelect(id)}
          className={styles.tab}
        >
          {name}
        </RestaurantTabContainer>
      ))}
    </div>

  );
}
