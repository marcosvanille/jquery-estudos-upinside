//Forma padrao de inicializar o jquery
// $(document).ready(function () {
// $(".jquery_essentials").html("jquery iniciado")
// });

//Forma padrao de inicializar o jquery Simplificada
// $(function () {
// $(".jquery_essentials").html("jquery Iniciado com Gatilho")
// });

//carregando antes de outra LIB
// jQuery(function($){
// $(".jquery_essentials").html("jquery antes de outra lib!");
// });

//carregando depois de outra lib
// var $j = jQuery.noConflict();
// $j(document).ready(function(){
// $j  (".jquery_essentials").html("jquery depois de outra lib!")
// });

$(function(){
$(".jquery_essentials").html("jquery essentials")
});