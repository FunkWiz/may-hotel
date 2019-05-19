import React, { useState } from 'react';
import Form from '../../../components/Form/Form';
import FormField from '../../../components/FormField/FormField';
import Select from '../../../components/Select/Select';
import { getDateRange } from '../../../utils/helpers';
import Box from '../../../components/Box/Box';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import DatePicker from '../../../components/DatePicker/DatePicker';
import { Switch } from "@material-ui/core";

const Cleaning = () => {
    const [enabled, setEnabled] = useState(true);
    const [date, setDate] = useState();

    const handleDateChange = selectedDate => setDate(selectedDate);
    const handleEnabledChange = event => setEnabled(event.target.checked);

    const allowedDates = getDateRange(new Date(), 6);

    const handleFormSubmit = () => {

    };

    return (
        <div>
            <Form onSubmit={handleFormSubmit}>
                <Box>
                    <Box>
                        <FormField title="מעוניין בניקיון">
                            <div className="switch-container">
                                <Switch color="primary" checked={enabled} onChange={handleEnabledChange} />
                            </div>
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
                        <SubmitButton>שלח</SubmitButton>
                    </Box>
                </Box>
            </Form>
        </div>
    )
}

export default Cleaning;