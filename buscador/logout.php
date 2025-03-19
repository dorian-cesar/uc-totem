<?php
session_start();

// Destruir todas las sesiones activas
session_unset();
session_destroy();

// Redirigir al usuario a la página de inicio
header("Location: index.php");
exit;
?>

