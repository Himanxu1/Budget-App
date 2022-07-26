import React,{useContext} from 'react';
import { TiDelete } from 'react-icons/ti';
import Badge from 'react-bootstrap/Badge';
import { AppContext } from '../Context/AppContext';


const ExpenseItem = (props) => {

  const {dispatch} = useContext(AppContext);

  const handleDelete=() =>{
       
    dispatch({
      type:'DELETE_EXPENSE',
      payload: props.id
    })

  }

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <div>
        <Badge bg="primary" pill style={{marginRight:"10px"}}>
          ${props.cost}
        </Badge>
          <TiDelete size="1.5em" onClick={handleDelete}></TiDelete>
      </div>
    
    </li>
  )
}

export default ExpenseItem