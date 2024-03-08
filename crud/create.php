<?php
    include("database.php");
    $sucesso = "Cadastrado com sucesso!";

    if(!empty($_POST["nome"]) && !empty($_POST["email"]) && !empty($_POST["cidade"])){

        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $cidade = $_POST["cidade"];

        $comando = $banco->prepare("INSERT INTO tb_pessoas (nome, email, cidade) VALUES (:nome, :email, :cidade)");
        $comando->bindParam("nome", $nome);
        $comando->bindParam("email", $email);
        $comando->bindParam("cidade", $cidade);

        try
        {
            $comando->execute();
            echo json_encode($sucesso);
        }
        catch(PDOException $e)
        {
            echo "Erro". $e->getMessage();
        }
    }
    
?>