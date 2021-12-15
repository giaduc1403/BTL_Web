// Trang Chủ============
function myFunction(x) {
    x.classList.toggle("change");
}
$(document).ready(function() {
    $('#toggle').click(function() {
        $('nav').slideToggle();
    })
})
$(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >= 100){
            $("nav").css({
                "margin": 0,
                "position": "fixed",
                "left": 0,
                "right": 0,
                "z-index": 999,
                "opacity": 0.7
            })
        } else{
            $("nav").css({
                "position": "relative",
                "left": 0,
                "right": 0,
                "z-index": 999,
                "opacity": 1
            })
        }
        if($(this).scrollTop() >= 100){
            $("#gototop").show("slow");
        } else{
            $("#gototop").hide("slow");
        }
      });
      $("#gototop").click(function(){
        $("html, body").animate({
            scrollTop : 0
        }, 150);
      });
  });
// 
$(document).ready(function() {
    $('.tab-content-item').hide();
    $('.tab-content-item:first-child').fadeIn();
    $('.nav-tabs li').click(function() {
        // Active nav tabs
        $('.nav-tabs li').removeClass('active');
        $(this).addClass('active');

        // Show tab-content item
        let id_tab_content = $(this).children('a').attr('href')
        $('.tab-content-item').hide();
        $(id_tab_content).fadeIn();
        return false;
    });
});
// ====Chart====

//menu-choose-option
$(document).ready(function(){
    $(".drinks .drink:not(#coffee)").hide()

    $("ul.drinks-options a").click(function(){
        event.preventDefault()
        // xu ly tab
        $(".drinks-options li a").removeClass("choosen");

        var tab = $(this).attr("href");
        $(this).addClass("choosen");
        var drinks = document.querySelectorAll(`.drinks .drink${tab}`);
        $(".drinks .drink").hide();
        $(drinks).show();
    })
    //thêm item
    const btn = document.querySelectorAll("#btnThem")
    
    btn.forEach(function(button,index){
        button.addEventListener("click",function(event){{
            var btnItem = event.target
            var product = btnItem.parentElement.parentElement.parentElement
            var productImg = product.querySelector("img").src
            var productName = product.querySelector(".title-text").innerText;
            console.log(productName)
            var productprice = product.querySelector(".money").innerText;
            /* addCart(productName,productImg,productprice) */
            $(".cart-items").append(
                `<div class="cart-item">
                <div class="cart-image">
                    <img src=${productImg}>
                    <div>${productName}</div>
                </div>
                <div class="cart-price">
                    ${productprice}
                </div>
                <div class="cart-amount">
                    1
                </div>
                <div class="cart-option">
                    <input type="button" value="Xóa" id="deleteProduct">
                </div>
            </div>`
            )
        }})
    })

    //xóa card item
    $(".cart-items").on("click", "div.cart-item input[type=button]", function(){
        if(confirm("Ban co chac chan muon xoa khong?") == true){
            $(this).parent().parent().remove();
        }
    });
})

$(document).ready(function(){
    $("#kw").on('keyup', function(event){
        var kw = $("#kw").val().toLowerCase()
        $(".item").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(kw)>-1)
        })
    })
    $("#btnsearch").click(function(){
        var k = $("#kw").val().toLowerCase()
        var items = $("div.item div.bot h1")
        for (var i=0; i< items.length;i++){
            if($(items[i]).text().toLowerCase().indexOf(k)>=0)
                $(items[i]).parent().parent().parent().css("outline","2px solid red")
        }
        setTimeout(function(){
            $("div.item").css("outline","none")
        },2000)
    })
})

