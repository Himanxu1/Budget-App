import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Component/Budget';
import Remaining from './Component/Remaining';
import ExpenseTotal from './Component/ExpenseTotal';
import ExpenseList from './Component/ExpenseList';
import AddExpense from './Component/AddExpense';
import { AppProvider } from './Context/AppContext';
import SearchExpense from './Component/SearchExpense';

function App() {
  return (
    <AppProvider>
    <div className="container">
    <h1 className="mt-3 " >My Budget Planner</h1>
    <div className='row mt-3'>
      <div className='col-sm'>
        <Budget/>
      </div>
      <div className='col-sm'>
        <Remaining/>
      </div>
      <div className='col-sm'>
        <ExpenseTotal/>
      </div>
    </div>
    <h3 className='mt-3'>Expenses</h3>
    <SearchExpense/>

    <div className='row mt-3'>
      <div className='col-sm'>
    <ExpenseList/>
      </div>
    </div>
    <h3 className='mt-3'>Add Expense</h3>
    
    <div className='mt-3'>
      <div className='col-sm'>
        <AddExpense/>
      </div>

    </div>
    </div>
    </AppProvider>
  );
}

export default App;
