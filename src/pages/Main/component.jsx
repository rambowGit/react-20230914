import { useState } from 'react';
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/container';
import { RestaurantContainer } from '../../components/Restaurant/container';
import { Layout } from '../../components/Layout/component';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurantsIfNotExist } from "../../redux/entities/restaurant/thunks/get-restaurants";

export function MainPage() {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantsIfNotExist());
  }, []);


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
