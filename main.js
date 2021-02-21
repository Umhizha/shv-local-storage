let myInput = document
.querySelector('#my-input');

let btn = document
.querySelector('#add-item');

let parent = document
.querySelector('#parent');

let counter = 0;

let groceryList = [];

let currentStorage = localStorage.getItem('pink-bag');

currentStorage = JSON.parse(currentStorage);

if (currentStorage === null) {

  console.log('storage is empty');
  
}else{
  currentStorage.forEach(function (groceryItem){
    let liEl = document.createElement('El');
    
    liEl.innerHTML = groceryItem.name;
    
    parent.appendChild(El);
  });
}


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
addToStorage(groceryItem);
}
  

function addToStorage(data){
  let myStorage = localStorage.getItem('pink-bag');
  
  if (myStorage === null) {
    
    console.log('there is nothing');
    
    groceryList = [...groceryList, data];
    
    let dataJSON = JSON.stringify(groceryList);
    
    localStorage.setItem('pink-bag', dataJSON);
  }else{
    let oldList = JSON.parse(myStorage);
    
  oldList = [... oldList, data];
  localStorage.setItem('pink-bag', JSON.stringify(oldList));
  }
}









