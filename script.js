const mainBody = document.querySelector('body');
let mainMenu = document.getElementById('mainMenu'),
    burgerPatty = document.querySelector('.patty'),
    burgerMenu = document.querySelector('.burger');

burgerMenu.addEventListener('click',()=>{
    mainMenu.classList.toggle('active');
    burgerPatty.classList.toggle('activated');
});

const print = (string) => console.log(string);
print("Hello World");