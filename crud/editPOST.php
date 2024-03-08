<?php
    include("database.php");
    $sucesso = "Atualizado com sucesso!";

    if(!empty($_POST["nome"]) && !empty($_POST["cidade"]) && !empty($_POST["email"] && !empty($_POST["id"]))) {
        
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $cidade = $_POST["cidade"];
        $id = $_POST["id"];

        $comando = $banco->prepare("UPDATE tb_pessoas SET nome = :nome, email = :email, cidade = :cidade WHERE id = :id");
        $comando->bindParam("nome", $nome);
        $comando->bindParam("email", $email);
        $comando->bindParam("cidade", $cidade);
        $comando->bindParam("id", $id);

        try{

            $comando->execute();
            echo json_encode($sucesso);
        }
        catch(PDOException $e){
            echo "Erro". $e->getMessage();
        }
    }
?>