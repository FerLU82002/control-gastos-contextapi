import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex justify-center">
        <img src="/grt" alt="Grafica de gastos" />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button 
                type="button"
                onClick={() => console.log('Resetting app...')}
                className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg">
            Resetear App
        </button>

        <AmountDisplay
          label="Presupuesto"
          amount={300}
        />

         <AmountDisplay
          label="Disponible"
          amount={200}
          
        />

         <AmountDisplay
          label="Gastado"
          amount={100}
        />
      </div>
    </div>
  )
}
