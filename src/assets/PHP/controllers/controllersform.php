<?php
include("../class/ClassCaptcha.php");

$ObjCaptcha=new Captcha();
$Retorno=$ObjCaptcha->getCaptcha($_POST['g-recaptcha-response']);
if($Retorno->success == true && $Retorno->score > 0.5){
    ../enviar.php
}else{
}
