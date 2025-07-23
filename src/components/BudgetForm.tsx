import { useMemo, useState, type FormEvent } from 'react';
import { useBudget } from '../hooks/useBudget';

export default function BudgetForm() {

const [budget, setBudget] = useState(0);
const { dispatch } = useBudget();

const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
}

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0;
    }, [budget]);

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: 'add-budget', payload: { budget } });
    }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
            <label htmlFor="budget" className="text-4xl text-blue-690 font-bold text-center ">
                Presupuesto
            </label>
             <input
                id="budget"
                type="number" 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Ingresa tu presupuesto"
                name="budget"
                value={budget}
                onChange={handleChange}
            />
        </div>
        <input 
                type="submit" 
                value='Definir Presupuesto'
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 uppercase disabled:opacity-50 disabled:cursor-not-allowed" 
                disabled={isValid}
                />
    </form>
  )
}
