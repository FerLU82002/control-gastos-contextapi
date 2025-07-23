import { formatCurrency } from '../helpers/index';


type AmountDisplayProps = { 
    label: string;
    amount: number;
}

export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <div className="text-2xl text-blue-600 font-bold">
        <span className="text-gray-500 font-normal">{label}: </span>
        <span className="text-blue-600">{formatCurrency(amount)}</span>
    </div>
  )
}
