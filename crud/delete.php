<?php
    include("database.php");

    if(!empty($_GET["id"])){
        $id = $_GET["id"];

        $comando = $banco->prepare("SELECT * FROM tb_pessoas WHERE id = :id");
        $comando->bindParam("id", $id);

        try{
            $comando->execute();
            $registro = $comando->fetch(PDO::FETCH_ASSOC);
            echo json_encode($registro);
        }
        catch(PDOException $e){
            echo "Erro".$e->getMessage();
        }
    }
?>