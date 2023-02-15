import './ExpenseItem.css';
function ExpenseItem(props){
    const expenseDate= new Date(2022,8,1);
    const expenseTitle= 'Car Purchase';
    const expensePrice = 10000;
    const locationOfExpenditure='City';
    return(
        <div className="expense-item">
            <div>{props.expense.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className='expense-item__price'>Rs{props.expense.price}</div>
                <div>{props.expense.loc}</div>
            </div>
        </div>
    )

}

export default ExpenseItem;