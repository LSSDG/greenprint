import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import react ,{useState} from 'react';
const ExpenseItem=(props)=>{
    const expenseDate= new Date(2022,8,1);
    const expenseTitle= 'Car Purchase';
    const expensePrice = 10000;
    const [amount,setAmount]=useState(props.expense.price);
    const deleteExpense = ()=>{
        setAmount(null);

    }
    
    return(
        <div className="expense-item">
            <ExpenseDate date={props.expense.date}/>
            
            <ExpenseDetails title={props.expense.title} price={amount} loc={props.expense.loc}/>
            <button onClick={deleteExpense} >Delete Expense</button>  
            
        </div>
    )

};

export default ExpenseItem;