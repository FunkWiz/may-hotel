import React from 'react';
import MealBooking from '../../../components/MealBooking/MealBooking';
import { mealSettings } from '../consts';
import { getDateRange } from '../../../utils/helpers';

const Breakfast = () => {
    const { breakfast } = mealSettings;
    const allowedDates = getDateRange(new Date(), 5);
    
    return (
        <div>
            <MealBooking
                defaultDate={new Date()}
                allowedTimes={breakfast.times}
                allowedDates={allowedDates}
                maxGuests={breakfast.maxGuests}
                mealId={breakfast.id}
                modalSuccess={breakfast.modalSuccess}
            />
        </div>
    );
};
export default Breakfast;