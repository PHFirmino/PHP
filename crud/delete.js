let registro = document.querySelector("#registro")

document.addEventListener("DOMContentLoaded", ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id")
    try{
        fetch(`http://localhost/php2/crud/delete.php?id=${id}`,{
            method: "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(resposta => resposta.json())
        .then(resposta => {
            registro.innerHTML = 
            `
                <input type="hidden" name="id" value="${resposta.id}">
                <input type="hidden" name="nome" value="${resposta.nome}">
                <input type="hidden" name="email" value="${resposta.email}">
                <input type="hidden" name="cidade" value="${resposta.cidade}">
    
                <p>Nome = ${resposta.nome}</p>
                <p>Email = ${resposta.email}</p>
                <p>Cidade = ${resposta.cidade}</p>
    
                <input type="submit" value="Deletar">
    
            `
        })
    }
    catch(e){
        console.log(e)
    }
})

registro.addEventListener("submit", (e)=>{
    e.preventDefault()

    let alerta = document.querySelector("#alerta")

    try{
        fetch("http://localhost/php2/crud/deletePOST.php", {
            method: "POST",
            body : new FormData(registro)
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
})

