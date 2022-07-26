import { createContext,useReducer } from "react";


const AppReducer = (state,action)=>{
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],

            }
            case 'DELETE_EXPENSE':
                return {
                    ...state,
                    expenses: state.expenses.filter((expense)=> expense.id !== action.payload)
    
                }   
                case 'SEARCH_EXPENSE':
                    console.log(action.payload)
                    if(action.payload === " "){
                        return {
                            ...state,
                            expenses: [...state.expenses]
                        }
                    }else{
                        return {
                            ...state,
                            expenses: state.expenses.filter((expense)=> expense.name.includes(action.payload))
                        
                        }        
                    }
        default:
            return state;
    }
}

const initialState ={
    budget: 2000,
    expenses:[
        {id: 12, name: 'shopping' , cost: 40},
        {id: 13, name: 'Holiday' , cost: 100}

    ]
}

export const AppContext = createContext();

export const AppProvider = (props)=>{
    const [state,dispatch]= useReducer(AppReducer,initialState);

    return (
        <AppContext.Provider value={{budget: state.budget,expenses: state.expenses,dispatch}}>
            {props.children}
        </AppContext.Provider>

    )
}

