import React, { useState } from 'react';
import MealBooking from '../../../components/MealBooking/MealBooking';
import { mealSettings } from '../consts';
import { getDateRange } from '../../../utils/helpers';
import SiteModal from '../../../components/SiteModal/SiteModal';

const Breakfast = () => {
    const { breakfast } = mealSettings;
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({
        title: 'ארוחת בוקר',
        text: 'הזמנתך התקבלה'
    });

    const handleSubmit = values => {
        setModalOpen(true);
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
            <SiteModal
                open={modalOpen}
                title={modalData.title}
                text={modalData.text}
                onClose={() => setModalOpen(false)}
            />
        </div>
    )
};
export default Breakfast;