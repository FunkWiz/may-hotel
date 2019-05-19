import React, { useState } from 'react';
import Form from '../../../components/Form/Form';
import FormField from '../../../components/FormField/FormField';
import { settings } from '../consts';
import Select from '../../../components/Select/Select';
import Box from '../../../components/Box/Box';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import TextArea from '../../../components/TextArea/TextArea';

const MissingItems = () => {
    const { maintenance } = settings;
    const subjects = Object.keys(maintenance.subjects).map(key => ({
        value: key,
        text: maintenance.subjects[key]
    }));
    const [subject, setSubject] = useState('');
    const [notes, setNotes] = useState('');
    const handleSubjectChange = event => setSubject(event.target.value);
    const handleNotesChange = event => setNotes(event.target.value);

    return (
        <Box>
            <Form>
                <Box>
                    <FormField title="נושא הבעיה">
                        <Select
                            placeholder="בחר את נושא הבעיה"
                            detailed
                            items={subjects}
                            value={subject}
                            onChange={handleSubjectChange}
                            naturalSize
                        />
                    </FormField>
                    <FormField title="תיאור הבעיה">
                        <TextArea
                            value={notes}
                            onChange={handleNotesChange}
                            placeholder="לדוגמא: המזגן בחדר 003 לא עובד"
                        />
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