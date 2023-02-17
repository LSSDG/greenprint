import ExpenseItem from './components/ExpenseItem';
import ExpensesFilter from './components/ExpensesFilter';
import NewExpense from './components/NewExpense';
import {useState} from 'react';


function App() {
  const dexpenses = [{id:1,title:'Car',price:4000,date:new Date(2022,1,12),loc:'City1'},
  {id:2,title:'CarB',price:4500,date:new Date(2023,4,21),loc:'City2'},
  {id:3,title:'CarC',price:7000,date:new Date(2022,5,5),loc:'City3'},
  {id:4,title:'CarD',price:6000,date:new Date(2021,7,12),loc:'City4'}];
  /*{for(let i=0;i<expenses.length;i++){
    <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
      <ExpenseItem expense={expenses[3]}></ExpenseItem>*/
      const [expenses,setExpenses] = useState(dexpenses);
      const addExpenseHandler = (expense)=>{
        console.log('addexpense');
        setExpenses((prevExpense)=>{
          return [expense,...prevExpense]
        })

      }
      const [filItems,setFilItems]=useState(dexpenses);
      const [filteredYear,setFilteredYear] = useState('2020');
      const filterChangeHandler =(selectedYear)=>{
        setFilteredYear(selectedYear);
        console.log(expenses);
        const temp=expenses.filter(expense=>{
          return expense.date.getFullYear().toString() == filteredYear;
          
        })
        console.log(temp);
        setFilItems(temp);console.log(filItems);
      }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/> 
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
      {filItems.length==0 ? (<p>No expense</p>) : filItems.map((expen)=>(
        <ExpenseItem expense={expen} key={expen.id}></ExpenseItem>
      ))}
      
      
    
    </div>
  );
}

export default App;
