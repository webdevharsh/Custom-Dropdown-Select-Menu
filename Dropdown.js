let select = document.querySelector('.container .select');
let selectInput = document.querySelector('.container .select input');
let container = document.querySelector('.container');
let allLi = document.querySelectorAll('.container .options li');

select.addEventListener('click',()=>{
  container.classList.toggle('active'); 
});

let getValue =(e)=>{
  selectInput.value = e.target.children[1].innerHTML;
  container.classList.remove('active'); 
}

allLi.forEach((li)=>{
 li.addEventListener('click',getValue);
})
