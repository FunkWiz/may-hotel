import React, { useState } from "react";
import DatePicker from '../DatePicker/DatePicker'
import Select from '../Select/Select'
import Box from "../Box/Box";
import FormField from "../FormField/FormField";
import Form from "../Form/Form";
import "./MealBooking.scss";
import SubmitButton from "../SubmitButton/SubmitButton";
import { generateNormalizedArray } from "../../utils/helpers";

const MealBooking = ({ defaultTime, defaultDate, allowedDates, allowedTimes, maxGuests, onSubmit }) => {
    const [date, setDate] = useState(defaultDate);
    const [time, setTime] = useState(defaultTime);
    const [guests, setGuests] = useState(1);
    const handleDateChange = selectedDate => setDate(selectedDate);
    const handleTimeChange = event => setTime(event.target.value);
    const handleGuestsChange = event => setGuests(event.target.value);
    const handleFormSubmit = () => {
        if (typeof onSubmit === 'function') {
            onSubmit({
                date,
                time,
                guests
            });
        }
    };
    return (
        <div className="meal-booking">
            <Form onSubmit={handleFormSubmit}>
                <div className="meal-disclaimer">
                    <Box>
                        <p>
                            אורח יקר,
                <br />
                            באפשרותך לשריין מקום לארוחה לפי תאריך, שעה ומספר סועדים.
                            לידיעתך, השריון תקף לחצי שעה הראשונה של הארוחה בלבד.
                </p>
                    </Box>
                </div>
                <Box>
                    <Box>
                        <FormField title="בחר מספר אורחים">
                            <Select
                                items={generateNormalizedArray(maxGuests)}
                                value={guests}
                                onChange={handleGuestsChange}
                            />
                        </FormField>
                    </Box>
                    <Box>
                        <FormField title="בחר שעה">
                            <Select items={allowedTimes} value={time} onChange={handleTimeChange} />
                        </FormField>
                    </Box>
                    <Box>
                        <FormField title="בחר תאריך">
                            <DatePicker
                                selected={date}
                                onChange={handleDateChange}
                                allowedDates={allowedDates}
                            />
                        </FormField>
                    </Box>
                    <Box>
                        <SubmitButton>הזמן</SubmitButton>
                    </Box>
                </Box>
            </Form>
        </div>
    )
};
export default MealBooking;