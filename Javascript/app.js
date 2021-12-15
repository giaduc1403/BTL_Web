// click ẩn Password
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text')
        }else{
            $(this).prev().attr('type', 'password')
        }
    });
});
// hiện thông báo
var modal = document.getElementById('login-form');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}
// Submit login
var submit = document.getElementById("btn");
      submit.onclick = function(){
          alert("Bạn đã đăng nhập thành công !!");
      }