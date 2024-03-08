<?php
    include("database.php");
    $sucesso = "Deletado com sucesso";

    if(!empty($_POST["nome"]) && !empty($_POST["email"]) && !empty($_POST["cidade"]) && !empty($_POST["id"])){
    
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $cidade = $_POST["cidade"];
        $id = $_POST["id"];

        $comando = $banco->prepare("DELETE FROM tb_pessoas WHERE id = :id");
        $comando->bindParam("id", $id);

        try{
            $comando->execute();
            echo json_encode($sucesso);
        }
        catch(PDOException $e) {
            echo "Erro". $e->getMessage();
        }
    }

?>