
const API_URL = 'http://localhost/apilumen/public';

let userForm = document.getElementById('userForm');
let usersTable = document.getElementById('usersTable');

userForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    registrarUsuario(name, email,password);
    userForm.reset();
})

function registrarUsuario (name,email,password){
    fetch(`${API_URL}/users`,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({name, email,password})
    }) 
    .catch((error) => {
        console.error(error);
    });
}

function obtenerUsuarios(){
    fetch(`${API_URL}/users`)
    .then((response) => response.json())
}
