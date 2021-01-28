<?php
$url = $_SERVER['REQUEST_URI'];
$ex = explode("/",$url);
$page = $ex[1];
$pagini = array(
   "despre-noi",
   "informatii-studenti",
   "blog",
   "p",
   "proiecte",
   "parteneri",
   "contact",
   "intrebari",
   "cookies",
   "contact",
   "blog",
   "",
   "documente"
);
function cod_http($url){
   $ch = curl_init($url);
   curl_exec($ch);
   $cod = curl_getinfo($ch, CURLINFO_HTTP_CODE);
   curl_close($ch);
   return $cod;

}

if(in_array($page,$pagini)===false){
   $u = "https://old.osut.ro/".$url;
   if(cod_http($u) !== "404"){
      http_response_code(301);
      header("location: https://old.osut.ro/".$url);
      exit();
   }else{
     // echo cod_http($u);
   }
}
$html = file_get_contents("index.html");
$r = 
?>
