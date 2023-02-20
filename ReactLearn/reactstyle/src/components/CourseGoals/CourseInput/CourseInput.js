import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valid,setValid]= useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
     if(enteredValue.trim().length===0){
      setValid(false);
       return;
     }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!valid?'invalid':''}`}>
        <label style={{color:!valid?'red':'black'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} style={{borderColor:!valid?'red':'black',background:!valid?'salmon':'transparent'}}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
