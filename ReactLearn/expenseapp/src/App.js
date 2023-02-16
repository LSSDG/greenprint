import ExpenseItem from './components/ExpenseItem';
import ExpenseForm from './components/ExpenseForm';


function App() {
  const expenses = [{title:'Car',price:4000,date:new Date(2022,1,12),loc:'City1'},
  {title:'CarB',price:4500,date:new Date(2022,4,21),loc:'City2'},
  {title:'CarC',price:7000,date:new Date(2022,5,5),loc:'City3'},
  {title:'CarD',price:6000,date:new Date(2022,7,12),loc:'City4'}];
  /*{for(let i=0;i<expenses.length;i++){
    <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
      <ExpenseItem expense={expenses[3]}></ExpenseItem>*/
  return (
    <div className="App">
      <ExpenseForm></ExpenseForm>
      {expenses.map((expense)=>(
        <ExpenseItem expense={expense}></ExpenseItem>
      ))}
      
      
    
    </div>
  );
}

export default App;
