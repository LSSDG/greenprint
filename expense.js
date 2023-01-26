//Mine
const form = document.getElementById('form');
const expenseList = document.getElementById('expense-list');
const amt=document.getElementById('amount');
const desc=document.getElementById('desc');
const categ=document.getElementById('category');


form.addEventListener('submit',
(e)=>{
    e.preventDefault();
    //alert('clicked');
    const expenseItem = document.createElement('li');
    const expenseAmount = amt.value;
    const expenseDesc = desc.value;
    const category = categ.value;
    const data = {
        amount:expenseAmount,
        exp:expenseDesc,
        category:category
    }
    const datac = JSON.stringify(data);
    localStorage.setItem(expenseDesc,datac);
    const editBtn = document.createElement('input');
    editBtn.type="button";editBtn.value="Edit";
    const deleteBtn = document.createElement('input');
    deleteBtn.type="button";deleteBtn.value="Delete";
    editBtn.onclick=()=>{
        localStorage.getItem(expenseDesc,datac);
        let editData=JSON.parse(datac);
        amt.value=editData.amount;
        desc.value=expenseDesc;
        categ.value=category;
        localStorage.setItem(expenseDesc,datac);
    }
    deleteBtn.onclick=()=>{
        localStorage.removeItem(expenseDesc);
        expenseList.removeChild(expenseItem);
    }
    
    //console.log(expenseAmount);
    
    expenseItem.textContent=expenseAmount + "   " + expenseDesc + "   " + category;
    expenseItem.appendChild(editBtn);expenseItem.appendChild(deleteBtn);
    expenseList.appendChild(expenseItem);

     

});

