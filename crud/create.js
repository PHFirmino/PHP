let formulario = document.querySelector("form")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

    let alerta = document.querySelector("#alerta")

    let nome = document.querySelector("#nome").value
    let email =  document.querySelector("#email").value
    let cidade = document.querySelector("#cidade").value

    if(nome != "" && email != "" && cidade != ""){
        try{
            fetch("http://localhost/php2/crud/create.php", {
                    method: "POST",
                    body : new FormData(formulario)
            })
            .then(resposta => resposta.json())
            .then(resposta => {
                console.log(resposta)
                alerta.innerHTML = 
                `
                    <div class="alert alert-success" role="alert">
                        ${resposta}
                    </div>
                `
            })
            setTimeout(()=>{
                window.location.href = "showHTML.php"
            }, 5000)
        }
        catch(e){
            console.log(e)
        }
    }
})