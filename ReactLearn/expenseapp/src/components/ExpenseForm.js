const ExpenseForm = ()=>{
    return(
        <div>
            <form>
                <label for="title"></label>
                <input type ="text" name="title" placeholder="Enter text"></input>
                <input type ='number ' />
                <input type ='date'></input>
                <button type="submit">ADD</button> 
            </form>
        </div>
    )
}
export default ExpenseForm;