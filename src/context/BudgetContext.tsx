import { useReducer,createContext, } from "react"
import { budgetReducer, initialState} from '../reducers/budget-reducers';
import type { Dispatch, ReactNode } from "react";
import type { BudgetActions, BudgetState } from '../reducers/budget-reducers';

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({children} : BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState);

    return (
            <BudgetContext.Provider 
            value={{ 
                    state, 
                    dispatch
                }}>
                {children}
            </BudgetContext.Provider>
    )
}
