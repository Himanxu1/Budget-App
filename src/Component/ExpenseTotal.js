import React,{useContext} from 'react';
import { AppContext } from '../Context/AppContext';



const ExpenseTotal = () => {
  const {expenses} = useContext(AppContext);

  const spendMoney = expenses.reduce((total,item)=>{
    return (total = total + Number(item.cost));
  },0)

  return (
    <div className='alert alert-primary'>
    <span>Spend So Far: ${spendMoney}</span>
</div>
  )
}

export default ExpenseTotal