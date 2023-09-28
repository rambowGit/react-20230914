import { Tab } from '../Tab/component';

export function RestaurantTabs({ restaurants, onChangeTab }) {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Tab
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => onChangeTab(index)}
          disabled={null}
        />
      ))}
    </div>

  );
}
