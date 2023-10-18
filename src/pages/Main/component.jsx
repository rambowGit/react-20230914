import { useState } from 'react';
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/container';
import { RestaurantContainer } from '../../components/Restaurant/container';
import { Layout } from '../../components/Layout/component';

export function MainPage() {
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  return (
    <Layout>
      <RestaurantTabsContainer
        activeRestaurantId={activeRestaurantId}
        onTabSelect={setActiveRestaurantId}
      />
      {activeRestaurantId && (
        <RestaurantContainer restaurantId={activeRestaurantId} />
      )}
    </Layout>
  );
}
