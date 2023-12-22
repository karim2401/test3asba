<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$n = $_POST['nom'];
$pr = $_POST['pre'];
$add = $_POST['mail'];
$mp = $_POST['mdp'];

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users VALUES ('$n','$pr','$add','$mp')");
$stmt->bind_param("ss", $param1, $param2, $param3, $param4);

// Set parameters and execute
$param1 = "$n";
$param2 = "$pr";
$param3 = "$add";
$param4 = "$mp";

$stmt->execute();
$stmt->close();
$conn->close();
?>