import React, { useState } from 'react';
import Form from '../../../components/Form/Form';
import FormField from '../../../components/FormField/FormField';
import Select from '../../../components/Select/Select';
import { getDateRange } from '../../../utils/helpers';
import Box from '../../../components/Box/Box';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import { settings } from '../consts';
import DatePicker from '../../../components/DatePicker/DatePicker';

const WakeUp = () => {
    const { wakeUp } = settings;

    const [time, setTime] = useState(wakeUp.times[0]);
    const [date, setDate] = useState();
    const handleDateChange = selectedDate => setDate(selectedDate);
    const handleTimeChange = event => setTime(event.target.value);
    const allowedDates = getDateRange(new Date(), 6);

    const handleFormSubmit = () => {

    };

    return (
        <div>
            <Form onSubmit={handleFormSubmit}>
                <Box>
                    <Box>
                        <FormField title="בחר שעה">
                            <Select items={wakeUp.times} value={time} onChange={handleTimeChange} />
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
}

export default WakeUp;