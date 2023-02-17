const ExpensesFilter = (props)=>{
    const dropdownChangeHandler = (e)=>{
        props.onChangeFilter(e.target.value);
    }
    return(
        <div>
            <div>
                <label>Filter By Year</label>
                <select  onChange={dropdownChangeHandler}>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>

                </select>
            </div>
        </div>
    )
}
export default ExpensesFilter;