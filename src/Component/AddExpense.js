import React,{useState,useContext} from 'react';
import { AppContext } from '../Context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddExpense = () => {

    const { dispatch } = useContext(AppContext);

    const [name,setName] = useState('');
    const [cost,setCost] =useState('');

    const onSubmit = (e) =>{
        e.preventDefault();

        const expense = {
            id:uuidv4(),
            name:name,
            cost: cost,
        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })

        setName('');
        setCost('');
        
    }

  return (
    <form onSubmit={onSubmit}>
        <div className='row'>
            <div className='col-sm'>
                <label htmlFor='name' >Name</label>
                <input required='required' type="text" className='form-control' id="name"  value={name} onChange={(e)=>setName(e.target.value)}/>

            </div>
            <div className='col-sm'>
                <label htmlFor='cost' >Cost</label>
                <input required='required' type="text" className='form-control' id="cost" value={cost} onChange={(e)=>setCost(e.target.value)}/>
            </div>
            <div className='col-sm'>
                <button type='submit' className='btn btn-primary'>Save</button>  
            </div>
        </div>

    </form>
  )
}

export default AddExpense;