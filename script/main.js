
let body =document.body;



// Search Form 
let searchForm=document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active')
}
window.onscroll = () =>{
    searchForm.classList.remove('active')
}
// Sidebar 
let sideBar=document.querySelector('.sidebar');

document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');

}

 

document.querySelector('#close-sidebar').onclick = () =>{
    sideBar.classList.remove('active');
    body.classList.remove('active');
     

}
window.onscroll = () =>{
    searchForm.classList.remove('active')
    if(window.innerWidth < 1200){
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }
}

