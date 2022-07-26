import React from 'react';
import { AppContext } from '../Context/AppContext';
import { useContext } from 'react';




const Budget = () => {
  const {budget} = useContext(AppContext);

  const handleClick= ()=>{
    
  }
   
  return (
    <div className='alert alert-secondary'>
        <span>Budget: ${budget}</span>
    </div>
  )
}

export default Budget