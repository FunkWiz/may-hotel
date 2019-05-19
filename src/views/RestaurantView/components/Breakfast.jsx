import React from 'react';
import MealBooking from '../../../components/MealBooking/MealBooking';
import { mealSettings } from '../consts';
import { getDateRange } from '../../../utils/helpers';

const Breakfast = () => {
    const { breakfast } = mealSettings;
    const handleSubmit = values => {
        console.log(values);
    };
    const allowedDates = getDateRange(new Date(), 15);
    return (
        <div>
            <MealBooking
                defaultTime={breakfast.times[0]}
                defaultDate={new Date()}
                allowedTimes={breakfast.times}
                allowedDates={allowedDates}
                maxGuests={breakfast.maxGuests}
                onSubmit={handleSubmit}
            />
        </div>
    )
};
export default Breakfast;