$(function(){
     $("#tel").mask("+7 ( 9 9 9) 9 9 9 - 9 9 - 9 9");
});


var modal = document.getElementById('popup');
var btn = document.getElementById("openPOP");
var close = document.getElementsByClassName("popup__close")[0];


btn.onclick = function() {
modal.style.display = "flex";
}

close.onclick = function() {
modal.style.display = "none";
}

// window.onclick = function(event) {
// if (event.target == modal) {
//      modal.style.display = "none";
// }
// }
function validate(){
     var check=document.getElementById('checkbox-agree');
     var error=document.getElementById('errorMSG');
     var conf=document.getElementById('popup__conf');
     var body=document.getElementById('popup__body');
     if(check.checked == false){
          error.textContent="Вы не подтвердили согласие";
          return false;
     }
     else{
          body.style.display="none";
          conf.style.display="flex";
          return false;
     }
}

$('.pulse-btn').click(function(){
     $(".optin-block").fadeToggle(500);
     $(".option-block-cut").fadeToggle(500);
});

// $('.pulse-btn').click(function(){
//      $(".optin-block").fadeToggle(100);
//      $(".option-block-cut").fadeToggle(100);
// });
// $('#pulse-close').click(function(){
//      $(".option-block-cut").show('slow');
// });