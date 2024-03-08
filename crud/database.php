<?php
    $db_server = "localhost";
    $db_name = "pessoas";
    $db_user = "root";
    $db_pass = "";
    try
    {
        $banco = new PDO("mysql:host=$db_server;dbname=$db_name", $db_user, $db_pass);
    }
    catch(PDOException $e)
    {
        echo "Erro". $e->getMessage();
    }
?>