import React,{useContext} from 'react';
import { AppContext } from '../Context/AppContext';

const Remaining = () => {
   const {expenses,budget} = useContext(AppContext);

   const totalExpense = expenses.reduce((total,item)=>{
    return (total = total + Number(item.cost));
   },0)

  const alertType = totalExpense > budget ? 'alert-danger':'alert-success'
  return (
    <div className={`alert ${alertType}`}>
    <span>Remaining: ${budget-totalExpense}</span>
</div>
  )
}

export default Remaining