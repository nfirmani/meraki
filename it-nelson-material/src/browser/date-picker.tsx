import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



export default function DatePicker() {

    const [value, setValue] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
      );
    
      const handleChange = (newValue: Date | null) => {
        setValue(newValue);
      };



  return (

    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Stack spacing={3}>
      <DesktopDatePicker
        label="Date desktop"
        inputFormat="dd/MM/yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <MobileDatePicker
        label="Date mobile"
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <TimePicker
        label="Time"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <DateTimePicker
        label="Date&Time picker"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  </LocalizationProvider>


  );
}