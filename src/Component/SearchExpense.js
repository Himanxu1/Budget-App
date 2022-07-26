import React,{useContext, useState} from 'react';
import { AppContext } from '../Context/AppContext';


const SearchExpense = () => { 
    const {dispatch,expenses} = useContext(AppContext);
    const [searchValue,setSearchValue] = useState("");

    
    const searchHandler = (e) =>{
     setSearchValue(e.target.value)
      // console.log(e.target.value)
        dispatch({
            type: 'SEARCH_EXPENSE',
            payload: searchValue,
        })
    }

  return (
    <div>
        <input type="text" value={searchValue} placeholder='Search..' onChange={searchHandler} />
    </div>
  )
}

export default SearchExpense