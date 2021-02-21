let myInput = document
.querySelector('#my-input');

let btn = document
.querySelector('#add-item');

let parent = document
.querySelector('#parent');

let counter = 0;

let groceryList = [];

btn.addEventListener('click',addToList);

function addToList(){
  
  counter ++;
  
  let myWord = myInput.value;
  let newLi = document.createElement('li');
  newLi.innerHTML = myWord;
  
  parent.appendChild(newLi);
  
  myInput.value = "";
  
  let groceryItem = {
    id: counter,
    name: myWord,
  }
    
   groceryList = [...groceryList, groceryItem];
   
   groceryList.push(groceryItem);



function addToStorage(data){
  let myStorage = localStorage
  .getItem('pink-bag');
  
  if (myStorage === null) {
    console.log('there is nothing');
    
  }
  
  
}

addToList();

}






