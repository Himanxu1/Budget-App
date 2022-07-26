import React,{useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../Context/AppContext';


const ExpenseList = () => {

const { expenses } = useContext(AppContext);

  return (
    <div>
        {expenses.map((expense,index)=>{
          return  <ExpenseItem key={index}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
        })}
    </div>
  )
}

export default ExpenseList