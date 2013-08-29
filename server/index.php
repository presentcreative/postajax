<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, X-Requested-With');
	header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
	
	
	print_r($_POST);
	
	echo $_POST['q'];
	echo $_POST['type'];
