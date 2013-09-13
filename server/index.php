<?php
	
	//returns the raw http request body text
	$raw_post = file_get_contents("php://input");
	
	//parses the request body into a php object
	$request_obj = json_decode($raw_post);
	
	//set the response headers
	//allows for cross-domain request
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
	
	//output the request parameter object in a readable format
	print_r($request_obj);
