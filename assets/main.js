window.addEventListener('load', ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#username');
    const  form = document.querySelector('#list');

    const username = localStorage.getItem('username') || '';
    
    nameInput.value =username;

    nameInput.addEventListener('change',e =>{
        localStorage.setItem('username',e.target.value);

    });

});