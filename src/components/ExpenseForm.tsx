import { useState } from 'react';
import { categories } from '../data/categories';
import DatePick from './DatePick';

export default function ExpenseForm() {
  const [selectedDate, setSelectedDate] = useState(null);

  // Maneja el cambio de la fecha
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <form className="space-y-6 max-w-4xl mx-auto p-6 text-sm font-medium text-gray-700">
      <fieldset className="border-2 border-gray-300 p-4 rounded-md">
        <legend className="uppercase text-center text-3xl font-bold text-blue-600 py-4">
          Nuevo Gasto
        </legend>

        <div className="flex flex-col gap-6 md:flex-row md:gap-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="expenseName" className="text-sm">Nombre de gasto</label>
            <input
              type="text"
              id="expenseName"
              name="expenseName"
              placeholder="Añade el nombre del gasto"
              className="border-2 border-gray-300 rounded-md p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="expenseAmount" className="text-sm">Cantidad</label>
            <input
              type="number"
              id="expenseAmount"
              name="expenseAmount"
              placeholder="Añade la cantidad del gasto"
              className="border-2 border-gray-300 rounded-md p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
              min="0"
            />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="expenseCategory" className="text-sm">Categoría</label>
          <select
            id="expenseCategory"
            name="expenseCategory"
            className="w-full mt-1 px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-500 transition-colors"
            required
          >
            <option value="">Seleccionar categoría</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* 📅 Componente de fecha mejorado */}
        <div className="mt-4">
          <label htmlFor="expenseDate" className="text-sm">Fecha del gasto</label>
            <DatePick
   
            />
           
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-600 transition-colors"
          >
            Añadir Gasto
          </button>
        </div>
      </fieldset>
    </form>
  );
}
