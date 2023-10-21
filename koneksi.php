<?php
	$host = 'prognet.localnet';
	$user = '2205551152';
	$pass = '2205551152';
	$db = 'db_2205551152';

	$conn = new mysqli($host, $user, $pass, $db);
	
	if($conn){
		//echo "Koneksi Berhasil";
	}

	mysqli_select_db($conn, $db);
?>
