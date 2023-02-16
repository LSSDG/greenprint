import {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = ()=>{
    //const [title,setTitle]=useState('');
    //const [price,setPrice]=useState('');
    //const [date,setDate]=useState('');
    const [input,setInput] = useState({
        title:'',
        amount:'',
        date:''
    });
    const titleHandler=(e)=>{
        setInput((prevState)=>{
            return {...prevState,
            title:e.target.value}
        }
            
        );
    }
    const priceHandler=(e)=>{
        setInput((prevState)=>{
            return {...prevState,
            amount:e.target.value}
        }
            
        );
    }
    const dateHandler=(e)=>{
        setInput((prevState)=>{
            return {...prevState,
            date:e.target.value}
        }
            
        );
    }



    return(
        <div>
            <form >
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type ="text" name="title" placeholder="Enter text" onChange={titleHandler}></input>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type ='number ' onChange={priceHandler}/>
                    </div>

                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type ='date' onChange={dateHandler}></input>
                    </div>
                    <div className='new-expense__actions'>
                        <button type="submit">ADD</button> 
                    </div>
                </div>
            </form>
        </div>
    )
}
export default ExpenseForm;