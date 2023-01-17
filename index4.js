const item2 = document.querySelector('.list-group-item:nth-child(2)');
item2.style.backgroundColor='green';
const item3 = document.querySelector('.list-group-item:nth-child(2)');
item3.style.opacity='0';

const odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}
const itemsecond=document.querySelectorAll('li:nth-child(2)');
itemsecond.style.color='green';