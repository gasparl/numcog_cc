<?php

#ini_set("display_errors", 1);
#ini_set('display_startup_errors', 1);
ini_set("display_errors", 0);
error_reporting(E_ALL);

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

if (substr($request->fname_post ?? '', -4) !== ".txt") {
    die("Failed: wrong format.");
}

$user_data = $request->results_post;

$path = $_SERVER['DOCUMENT_ROOT'] . "/numcog_cc_results_full/";
$file_name = $path .  $request->fname_post;

$outcome = file_put_contents($file_name, $user_data, FILE_APPEND | LOCK_EX);

if ($outcome > 500) {
    echo "https://app.prolific.co/submissions/complete?cc=C14CRGX7";
    # echo "https://app.prolific.co/submissions/complete?cc=56EB9E71";
} else if (is_file($file_name) === FALSE) {
    echo "Failed to save file! (" . $outcome . "x" . $request->fname_post . ")";
} else {
    echo "Failed to save full data! (" . $outcome . "x" . $request->fname_post . ")";
}
