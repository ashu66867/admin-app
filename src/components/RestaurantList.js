import React from 'react';
import Restaurant from './Restaurant';

const RestaurantList = ({restaurantArr}) => {
  return (
    <div>
      {restaurantArr.map(restaurant => <Restaurant key={restaurant.id} {...restaurant} />)}
    </div>
  )
}

export default RestaurantList