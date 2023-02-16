import './ExpenseItem.css';
const ExpenseDetails=(props)=>{
    return(
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className='expense-item__price'>Rs{props.price}</div>
            <div>{props.loc}</div>
        </div>

    )
}

export default ExpenseDetails;