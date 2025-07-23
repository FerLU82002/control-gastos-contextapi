import { useMemo } from 'react';
import BudgetForm from './components/BudgetForm';
import { useBudget } from './hooks/useBudget';
import BudgetTracker from './components/BudgetTracker';
import ExpenseModal from './components/ExpenseModal';

function App() {
  const { state } = useBudget();
  console.log('Budget State:', state);

  const isValidBudget = useMemo(() => {
    return state.budget > 0;
    console.log('Valid Budget:', isValidBudget);
  }, [state.budget]);

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-3xl font-bold text-center text-white">
          PLANIFICADOR DE GASTOS 
        </h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
         {isValidBudget ? <BudgetTracker/>  : <BudgetForm />}
      </div>
      {isValidBudget && <ExpenseModal />}
    </>
  )
}

export default App
