<?php
include 'db.php'; // incluye conexion a bd

session_start();

// Verificar si el usuario está autenticado
if (!isset($_SESSION["admin"])) {
    // Si no hay sesión iniciada, redirigir al login
    header("Location: login.php");
    exit();
}
?>

