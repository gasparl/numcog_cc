<?php

#ini_set("display_errors", 1);
#ini_set('display_startup_errors', 1);
ini_set("display_errors", 0);
error_reporting(E_ALL);

// get IP
$user_ip = $_SERVER['REMOTE_ADDR'];

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$user_data = $request->results_post;
if (strlen($request->results_post ?? '') < 50 or substr($request->fname_post ?? '', -4) !== ".txt") {
    die("Failed");
}

$path = $_SERVER['DOCUMENT_ROOT'] . "/../data/numcog_cc_results_part/";
$file_name = $path . $user_ip . '_' . $request->fname_post;

file_put_contents($file_name, $user_data);
