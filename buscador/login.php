<?php
session_start();
include 'db.php'; // Conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST["correo"];
    $clave = $_POST["clave"];

    // Preparar la consulta sin encriptación
    $stmt = $conn->prepare("SELECT id, nombre, apellido, clave FROM administradores WHERE correo = ?");
    $stmt->bind_param("s", $correo);
    $stmt->execute();
    $result = $stmt->get_result(); // Obtener el resultado de la consulta

    if ($row = $result->fetch_assoc()) { 
        if ($clave === $row["clave"]) { // Comparación directa sin password_verify
            $_SESSION["admin"] = $row["nombre"] . " " . $row["apellido"];
            header("Location: admin.php"); // Redirigir al panel de admin
            exit;
        } else {
            echo "<p style='color: red; text-align: center;'>Contraseña incorrecta.</p>";
        }
    } else {
        echo "<p style='color: red; text-align: center;'>Usuario no encontrado.</p>";
    }

    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            margin: 100px;
        }
        form {
            display: inline-block;
            background: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        input {
            padding: 10px;
            margin: 10px;
            width: 80%;
        }
        button {
            padding: 10px;
            background-color: #003366;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #002244;
        }
    </style>
</head>
<body>

<h2>Iniciar Sesión</h2>

<form method="post">
    <input type="email" name="correo" placeholder="Correo" required><br>
    <input type="password" name="clave" placeholder="Contraseña" required><br>
    <button type="submit">Ingresar</button>
</form>

</body>
</html>
