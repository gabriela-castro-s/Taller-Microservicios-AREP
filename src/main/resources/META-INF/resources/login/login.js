const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validarUsuario();
});

function validarUsuario(){
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    if(username == "gabriela" & password == "1234"){
        // Ejemplo de redirección a una página web
        window.location.href = "../home/home.html";
    }

}