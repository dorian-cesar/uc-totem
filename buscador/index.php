<?php
//include 'db.php'; // Incluir la configuración de la base de datos

// Definir los colores según los semestres guardados en la base de datos
$semestres_colores = [
    "Primer Semestre 2024" => "#0176de",
    "Segundo Semestre 2024" => "#dd3636",
    "Primer Semestre 2025" => "#25883b",
    "Segundo Semestre 2025" => "#AE45BA"
];

// Mapear los nombres de los semestres para que se muestren con el nuevo formato
$semestres_nombres = [
    "Primer Semestre 2024" => "Supervisores-Tutores 1er Semestre 2024",
    "Segundo Semestre 2024" => "Supervisores-Tutores 2do Semestre 2024",
    "Primer Semestre 2025" => "Supervisores-Tutores 1er Semestre 2025",
    "Segundo Semestre 2025" => "Supervisores-Tutores 2do Semestre 2025"
];

// Definir color por defecto
$color_tabla = "#003366";

if (isset($_GET['semestre']) && isset($semestres_colores[$_GET['semestre']])) {
    $color_tabla = $semestres_colores[$_GET['semestre']]; // Cambia el color si hay un semestre seleccionado
}

$busqueda = "";
if (isset($_GET['buscar'])) {
    $busqueda = trim($_GET['buscar']);
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de Docentes Tutores de Prácticas</title>
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
        .login {
            position: absolute;
            top: 15px;
            right: 20px;
        }
        .login a {
            display: inline-block;
            padding: 10px 15px;
            background-color: #6f95ff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-size: 14px;
            font-weight: bold;
            display: none; /* Ocultar el botón de login */
        }
        .login a:hover {
            background-color: #002244;
        }
        .sidebar {
            width: 250px;
            position: fixed;
            top: 80px;
            left: 0;
            bottom: 0;
            padding: 10px;
        }
        .semestre-button {
            display: block;
            padding: 15px;
            margin: 10px 0;
            text-decoration: none;
            color: white;
            text-align: center;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
        }
        .semestre-button:hover {
            background-color: #002244 !important;
        }
        .content {
            margin-left: 280px;
            padding: 20px;
        }
        h1, h2 {
            text-align: center;
            color: #003366;
        }
        table {
            width: 90%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
            text-align: left;
        }
        th {
            background-color: <?php echo $color_tabla; ?>;
            color: white;
        }
        td {
            background-color: <?php echo $color_tabla; ?>1A; /* Color con transparencia */
        }
        .search-bar {
            text-align: center;
            margin-bottom: 20px;
        }
        .search-bar input {
            padding: 10px;
            width: 60%;
            border: 1px solid #6f95ff;
            border-radius: 5px;
        }
        .search-bar button {
            padding: 10px 15px;
            background-color: #003366;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }
        .search-bar button:hover {
            background-color: #6f95ff;
        }
    </style>
</head>
<body>

<header>
    Docentes Tutores de Prácticas
    <div class="login">
        <a href="login.php">Login</a>
    </div>
</header>

<h2>Facultad de Educación</h2>

<div class="sidebar">
    <?php foreach ($semestres_colores as $semestre => $color): ?>
        <a href="?semestre=<?php echo urlencode($semestre); ?>" class="semestre-button" style="background-color: <?php echo $color; ?>;">
            <?php echo $semestres_nombres[$semestre]; ?>
        </a>
    <?php endforeach; ?>
</div>

<div class="content">
    <div class="search-bar">
        <form method="GET" action="">
            <input type="text" name="buscar" placeholder="Buscar docente por nombre o apellido..." value="<?php echo htmlspecialchars($busqueda); ?>">
            <button type="submit">Buscar</button>
        </form>
    </div>

    <?php
    if (isset($_GET['semestre']) || !empty($busqueda)) {
        echo "<h2>Listado de Docentes</h2>";

        if (!empty($busqueda)) {
            $stmt = $conn->prepare("SELECT nombre, apellido, correo, carrera, codigo_carrera FROM profesores WHERE nombre LIKE ? OR apellido LIKE ?");
            $param = "%$busqueda%";
            $stmt->bind_param("ss", $param, $param);
        } else {
            $semestre = $_GET['semestre'];
            echo "<h3>Semestre: " . $semestres_nombres[$semestre] . "</h3>";
            $stmt = $conn->prepare("SELECT nombre, apellido, correo, carrera, codigo_carrera FROM profesores WHERE semestre = ?");
            $stmt->bind_param("s", $semestre);
        }

        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            echo "<table>
                    <tr><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Carrera</th><th>Código</th></tr>";
            while ($row = $result->fetch_assoc()) {
                echo "<tr>
                        <td>{$row['nombre']}</td>
                        <td>{$row['apellido']}</td>
                        <td><a href='mailto:{$row['correo']}' style='color: #003366; text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>{$row['correo']}</a></td>
                        <td>{$row['carrera']}</td>
                        <td>{$row['codigo_carrera']}</td>
                      </tr>";
            }
            echo "</table>";
        } else {
            echo "<p style='text-align: center; color: #003366; font-weight: bold;'>No se encontraron resultados.</p>";
        }

        $stmt->close();
    }
    ?>
</div>

</body>
</html>
