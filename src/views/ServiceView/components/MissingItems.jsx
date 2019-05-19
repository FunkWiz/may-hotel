import React, { useState } from 'react';
import Form from '../../../components/Form/Form';
import FormField from '../../../components/FormField/FormField';
import { settings } from '../consts';
import Select from '../../../components/Select/Select';
import { generateNormalizedArray } from '../../../utils/helpers';
import Box from '../../../components/Box/Box';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import TextArea from '../../../components/TextArea/TextArea';

const MissingItems = () => {
    const { missingItems } = settings;
    const [covers, setCovers] = useState(0);
    const [pillows, setPillows] = useState(0);
    const [shampoos, setShampoos] = useState(0);
    const [towels, setTowel] = useState(0);
    const [requests, setRequests] = useState('');

    const handleCoversChange = event => setCovers(event.target.value);
    const handlePillowsChange = event => setPillows(event.target.value);
    const handleShampoosChange = event => setShampoos(event.target.value);
    const handleTowelsChange = event => setTowel(event.target.value);
    const handleRequestsChange = event => setRequests(event.target.value);

    return (
        <Box>
            <Form>
                <Box>
                    <FormField title="שמיכה">
                        <Select
                            items={generateNormalizedArray(missingItems.maxCovers)}
                            value={covers}
                            onChange={handleCoversChange}
                        />
                    </FormField>
                    <FormField title="כריות">
                        <Select
                            items={generateNormalizedArray(missingItems.maxPillows)}
                            value={pillows}
                            onChange={handlePillowsChange}
                        />
                    </FormField>
                    <FormField title="מגבות">
                        <Select
                            items={generateNormalizedArray(missingItems.maxTowels)}
                            value={towels}
                            onChange={handleTowelsChange}
                        />
                    </FormField>
                    <FormField title="שמפו">
                        <Select
                            items={generateNormalizedArray(missingItems.maxShampoos)}
                            value={shampoos}
                            onChange={handleShampoosChange}
                        />
                    </FormField>
                    <FormField title="שונות">
                        <TextArea value={requests} onChange={handleRequestsChange} />
                    </FormField>
                </Box>
                <Box>
                    <SubmitButton>שלח</SubmitButton>
                </Box>
            </Form>
        </Box>
    )
};
export default MissingItems;