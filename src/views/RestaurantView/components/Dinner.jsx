import React from 'react';
import MealBooking from '../../../components/MealBooking/MealBooking';
import { mealSettings } from '../consts';

const Dinner = () => {
  const { dinner } = mealSettings;
  return (
    <div>
      <MealBooking
        defaultTime={dinner.times[0]}
        defaultDate={new Date()}
        allowedTimes={dinner.times}
        allowedDates={[new Date()]}
        maxGuests={dinner.maxGuests}
      />
    </div>
  )
};
export default Dinner;