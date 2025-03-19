<?php
session_start();
$_SESSION['admin'] = [
    'nombre' => $nombre,
    'apellido' => $apellido
];
include 'db.php'; // Conexión a la base de datos
require 'includes/auth.php'; // Verifica la sesión
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Administración</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
        }
        header {
            background-color: #003366;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 24px;
            font-weight: bold;
            position: relative;
        }
        .logout {
            position: absolute;
            top: 15px;
            right: 20px;
        }
        .logout a {
            display: inline-block;
            padding: 10px 15px;
            background-color: #6f95ff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-size: 14px;
            font-weight: bold;
        }
        .logout a:hover {
            background-color: #002244;
        }
        .auth-info {
            position: absolute;
            top: 15px;
            left: 20px;
            font-size: 16px;
            font-weight: bold;
        }
        .container {
            width: 90%;
            margin: 30px auto;
            text-align: center;
        }
        .btn {
            display: inline-block;
            padding: 10px 15px;
            margin: 10px;
            background-color: #003366;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
        }
        .btn:hover {
            background-color: #002244;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        table, th, td {
            border: 1px solid #ddd;
            text-align: left;
        }
        th {
            background-color: #003366;
            color: white;
            padding: 10px;
        }
        td {
            padding: 10px;
        }
         .action-buttons {
            display: flex;
            justify-content: center;
            gap: 10px; /* Espacio entre los botones */
        }
        .edit, .delete {
            padding: 5px 10px;
            border-radius: 5px;
            text-decoration: none;
            color: white;
            font-weight: bold;
            display: inline-block;
            text-align: center;
            width: 80px;
        }
        .edit {
            background-color: #25883b;
        }
        .edit:hover {
            background-color: #1c6e2d;
        }
        .delete {
            background-color: #dd3636;
        }
        .delete:hover {
            background-color: #bb2c2c;
        }
    </style>
</head>
<body>

<header>
<div class="logout">
        <a href="logout.php">Cerrar Sesión</a>
    </div>
    <div class="auth-info">
        <?php if (isset($_SESSION['admin']) && isset($_SESSION['admin']['nombre']) && isset($_SESSION['admin']['apellido'])): ?>
            Autenticado como <?= htmlspecialchars($_SESSION['admin']['nombre']) ?> <?= htmlspecialchars($_SESSION['admin']['apellido']) ?>
        <?php else: ?>
            No autenticado
        <?php endif; ?>
    </div>
</header>

<div class="container">
    <a href="upload.php" class="btn">Subir Listado Excel</a>
    <a href="export.php" class="btn">Exportar Listado Completo</a>

    <h2>Listado de Docentes</h2>

    <?php
    // Obtener listado de docentes
    $stmt = $conn->prepare("SELECT id, nombre, apellido, correo, carrera, codigo_carrera, semestre from profesores");
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "<table>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Carrera</th>
                    <th>Código</th>
					<th>Semestre</th>
                    <th>Acciones</th>
                </tr>";

        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>{$row['nombre']}</td>
                    <td>{$row['apellido']}</td>
                    <td><a href='mailto:{$row['correo']}' style='color: #003366; text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>{$row['correo']}</a></td>
                    <td>{$row['carrera']}</td>
                    <td>{$row['codigo_carrera']}</td>
					<td>{$row['semestre']}</td>
                    <td>
                        <a href='edit.php?id={$row['id']}' class='edit'>Editar</a>
                        <a href='delete.php?id={$row['id']}' class='delete' onclick='return confirm(\"¿Estás seguro de eliminar este registro?\")'>Eliminar</a>
                    </td>
                  </tr>";
        }

        echo "</table>";
    } else {
        echo "<p style='text-align: center; color: #003366; font-weight: bold;'>No hay docentes registrados.</p>";
    }

    $stmt->close();
    ?>
</div>

</body>
</html>
