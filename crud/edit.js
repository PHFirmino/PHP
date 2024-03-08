let formulario = document.querySelector("form")

document.addEventListener("DOMContentLoaded", ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id")

    fetch(`http://localhost/php2/crud/edit.php?id=${id}`,{
        method: "GET",
        headers: {
            "Content-Type" : "application/json"   
        }
    })
    .then(resposta => resposta.json())
    .then(resposta => {
        formulario.innerHTML = 
        `
        <input type="hidden" name="id" value="${resposta.id}">
        <input type="text" name="nome" id="nome" value="${resposta.nome}">
        <input type="text" name="email" id="email" value="${resposta.email}">
        <input type="text" name="cidade" id="cidade" value="${resposta.cidade}">
        <input type="submit" id="botao">
        `
    })
})


formulario.addEventListener("submit", (e)=>{
    e.preventDefault()

    let alerta = document.querySelector("#alerta")

    if(nome != "" && email != "" && cidade != ""){
    
        try{
            fetch("http://localhost/php2/crud/editPOST.php",{
                method : "POST",
                body : new FormData(formulario)
            })
            .then(resposta => resposta.json())
            .then(resposta => {
                console.log(resposta)
                alerta.innerHTML = 
                `
                    <div class="alert alert-success" role="alert">
                        ${resposta}
                    </div>`
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