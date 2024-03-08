document.addEventListener("DOMContentLoaded", ()=>{

let tbody = document.querySelector("tbody")

    try{
        fetch("http://localhost/php2/crud/show.php",{
            method: "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        }).then(resposta => resposta.json())
        .then(resposta => resposta.forEach(item => {
            tbody.innerHTML += 
            `
                <tr>
                    <th scope="row">${item.id}</th>
                    <td>${item.nome}</td>
                    <td>${item.email}</td>
                    <td>${item.cidade}</td>
                    <td><a href="editHTML.php?id=${item.id}">Editar</a><a href="deleteHTML.php?id=${item.id}">Excluir</a></td>
                </tr>
            `
        }))
    }
    catch(e){
        console.log(e)
    }
})