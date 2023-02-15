import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props){
    const expenseDate= new Date(2022,8,1);
    const expenseTitle= 'Car Purchase';
    const expensePrice = 10000;
    
    return(
        <div className="expense-item">
            <ExpenseDate date={props.expense.date}/>
            
            <ExpenseDetails title={props.expense.title} price={props.expense.price} loc={props.expense.loc}/>
                
            
        </div>
    )

}

export default ExpenseItem;