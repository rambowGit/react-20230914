import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./component";
import { selectRestaurantMenuById } from "../../redux/entities/restaurant/selectors";
import { useEffect } from "react";
import { getDishesByRestaurantIfNotExist } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant";

export const MenuContainer = ({ restaurantId }) => {
  const restaurantMenu = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantIfNotExist(restaurantId));
  }, [restaurantId]);

  return <Menu menu={restaurantMenu} />;
};
