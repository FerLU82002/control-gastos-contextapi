import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';

interface DatePickProps {
  selectedDate: Dayjs | null;
  onDateChange: (date: Dayjs | null) => void;
}

export default function DatePick({ selectedDate, onDateChange }: DatePickProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={selectedDate}
        onChange={onDateChange}
        slotProps={{
          /** ← Aquí estilizamos el TextField interno  */
          textField: {
            className:
              'w-full border-2 border-gray-300 rounded-md p-3 mt-2 text-sm ' +
              'focus:outline-none focus:ring-2 focus:ring-blue-600',
          },
        }}
      />
    </LocalizationProvider>
  );
}
