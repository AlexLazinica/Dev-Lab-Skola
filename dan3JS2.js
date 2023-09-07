let newItem = document.createElement('li');
console.log(newItem);
//newItem.innerText = "Item 5";
let newText = document.createTextNode('Item 5');


let list = document.getElementById('items');

newItem.classList.add('list-group-item')
console.log(newItem.classList)

list.appendChild(newItem);
newItem.appendChild(newText);

//list.querySelector('li').classList.remove('list-group-item')
let secondItem = list.children[1]
//console.log(secondItem)

//list.insertBefore(newItem, secondItem) // ubacuje drugi sto smo napravili prije prvog

//list.remove() // mice sve
//list.removeChild(secondItem) //mice drugi

