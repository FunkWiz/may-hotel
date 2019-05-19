import React from 'react';
import MealBooking from '../../../components/MealBooking/MealBooking';
import { mealSettings } from '../consts';

const Lunch = () => {
  const { lunch } = mealSettings;
  return (
    <div>
      <MealBooking
        defaultTime={lunch.times[0]}
        defaultDate={new Date()}
        allowedTimes={lunch.times}
        allowedDates={[new Date()]}
        maxGuests={lunch.maxGuests}
      />
    </div>
  )
};
export default Lunch;