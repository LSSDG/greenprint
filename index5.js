var itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='blue';
//console.log(itemList.parentNode.parentNode.parentNode);

//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='blue';
//console.log(itemList.parentElement.parentElement.parentElement);


//childNodes
//console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1],style.backgroundColor='yellow';

//firstchild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';
//lastchild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//createElement
//Create div
var newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello div');
var newDivText=document.createTextNode('Hello world');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);























