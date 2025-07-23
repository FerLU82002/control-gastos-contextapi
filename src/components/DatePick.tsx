import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Recibimos props para manejar el valor y el cambio de fecha
export default function DatePick({ selectedDate, onDateChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={selectedDate}
        onChange={onDateChange}  // Le pasamos la función que actualizará el valor de la fecha
        className="w-full mt-1 px-3 py-2 bg-white border border-gray-200 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </LocalizationProvider>
  );
}
