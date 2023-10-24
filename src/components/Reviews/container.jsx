import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { useEffect, useRef } from "react";
import { selectRestaurantReviewsById } from "../../redux/entities/restaurant/selectors";
import { getReviewsByRestaurantIfNotExist } from "../../redux/entities/review/thunks/get-reveiws-by-restaurant";
import { getUsersIfNotExist } from "../../redux/entities/user/thunks/get-users";
import { LOADING_STATUS } from "../../constants/loading-statuses";
import { useRequest } from "../../hooks/use-request";
import { useMakeRequest } from "../../hooks/use-make-request";
import { selectRequestStatus } from "../../redux/ui/request/selectors";



export const ReviewsContainer = ({ restaurantId }) => {
  const request = useRef();
  const restaurantReviews = useSelector((state) => 
    selectRestaurantReviewsById(state, restaurantId)
  );
  const reviewsLoadingStatus = useSelector((state) =>
    selectRequestStatus(state, request.current?.requestId)
  );
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    request.current = dispatch(getReviewsByRestaurantIfNotExist(restaurantId));
    
    return () => {
      request.current?.abort();
      request.current = null;
      
    };
  }, [restaurantId]);
  
  useEffect(() => {
    dispatch(getUsersIfNotExist());
    return () => {};
  }, []);
  
  if (reviewsLoadingStatus === LOADING_STATUS.loading) {
    return <div>Loading...</div>
  }
  
  return <Reviews reviews={restaurantReviews} />
  

}

