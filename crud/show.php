<?php

    include("database.php");

    $comando = $banco->prepare("SELECT * FROM tb_pessoas");
    $comando->execute();

    $valoresDoComando = $comando->fetchAll(PDO::FETCH_ASSOC);

    $armazenaValores = [];

    $contador = 0;

    foreach($valoresDoComando as $linha) {

        $armazenaValores[$contador] = $linha;

        $contador++;
    }

    echo json_encode($armazenaValores);
?>