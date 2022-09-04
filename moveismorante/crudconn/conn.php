

<?php
  $servidor="localhost";
  $usuario="root";
  $senha="";
  $banco="dbprodutos";

  try{
    $pdo = new PDO("mysql:host=$servidor;dbname=$banco",$usuario,$senha);

  }
  catch (PDOException $e) {
    echo "erro com banco de dados: " .$e->getMessage();
  }
  catch(Exception $e)
  {
    echo "Erro generico: " .$e->getMessage();
    
  };
                     
    
?>

