<?php
    include("database.php");

    if(!empty($_GET["id"])){

        $id = $_GET["id"];

        $comando = $banco->prepare("SELECT * FROM tb_pessoas WHERE id = :id");
        $comando->bindParam("id", $id);
        $comando->execute();

        $registro = $comando->fetch(PDO::FETCH_ASSOC);

        if(!empty($registro)){

            echo json_encode($registro);
        }
    } 
?>