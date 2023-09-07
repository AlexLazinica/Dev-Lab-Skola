//console.log(document);
//console.log(document.title);
document.title = 'New title' ;

let list = document.getElementById('items');
//console.log(list);
//console.log(list.innerHTML)
//list.innerHTML+=<p>Primjer</p>;

//let items = document.querySelectorAll('#items li');
let items = list.getElementsByClassName('list-group-item'); //drugi nacin predhodne linije 
//console.log(items);

//for (item of items){
//    console.log(item)
//}
 for(item of items){
    item.setAttribute('style','background-color:blue'); //jedno je set 
    item.style.color = 'white'; // a drugo direktno
    //console.log(item)
 }
 items[0].removeAttribute("style");
 //items[0].setAttribute('style','background-color:blue, color:black'); 

 let header = document.getElementById('header-title');
 header.innerText = "Novi naslov "
 //console.log(header.innerHTML) //bukvalno sta tamo pise (sve)
 //console.log(header.innerText) // samo tekst 
 //console.log(header.textContent) //tekst unutar tog taga

 //console.log(document.getElementsByClassName('btn-dark'));
 //document.getElementsByClassName('btn-dark')[0].setAttribute('disabled', true);
 //document.getElementsByClassName('btn-dark')[0].value = 'Prihvati';
 let form = document.getElementsByTagName('form')[0];

 //console.log(form.firstChild) //#text ... daje vise toga
 //console.log(form.firstElementChild)

 //console.log(form.children) //samo koji su child elementi
 //console.log(form.childNodes) // isto kao prosli korak uz jos i tekst

 console.log(form.parentElement)