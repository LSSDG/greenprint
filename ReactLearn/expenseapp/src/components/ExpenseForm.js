import {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props)=>{
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
    const submitHandler = (e)=>{
        e.preventDefault();
        const expenseData = {
            title:input.title,
            amount:input.amount,
            date:new Date(input.date)
        }
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setInput({
            title:'',
            amount:'',
            date:''
        })
    }



    return(
        <div>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type ="text" value={input.title} name="title" placeholder="Enter text" onChange={titleHandler}></input>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type ='number ' onChange={priceHandler} value={input.amount}/>
                    </div>

                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type ='date' onChange={dateHandler} value={input.date}></input>
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