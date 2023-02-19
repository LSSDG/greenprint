import react ,{useState} from 'react';
//import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpenseItem from './ExpenseItem';

//import ExpensesList from './ExpensesList';
//import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear,setFilteredYear] = useState('2020');
      const filterChangeHandler =(selectedYear)=>{
        setFilteredYear(selectedYear);
         
         
         
         
      }
      const filItems= props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear;
        
      })
    return(
        <div>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpensesChart expenses={filItems}/>
            {filItems.length===0 ? (<p>No expense</p>) : filItems.map((expen)=>(
            <ExpenseItem expense={expen} key={expen.id}></ExpenseItem>
            ))}

        </div>
    )
}

export default Expenses;