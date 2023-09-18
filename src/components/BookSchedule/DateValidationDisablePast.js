import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const today = dayjs();

export default function DateValidationDisablePast() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                    'DatePicker',
                ]}
            >
                <DemoItem label="DatePicker">
                    <DatePicker
                        defaultValue={today}
                        disablePast
                        views={['year', 'month', 'day']}
                    />
                </DemoItem>

            </DemoContainer>
        </LocalizationProvider>
    );
}
