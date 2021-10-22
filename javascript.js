//Menu
var tombolMenu = $(".button-menu");
var menu = $("nav .menu ul");

function klikMenu(){
    tombolMenu.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle();
    });
}

$(document).ready(function(){
    var width = $(window).width();
    if (width < 990){
        klikMenu();
    }
})

//Cek Lebar
$(window).resize(function(){
    var width = $(window).width();
    if (width > 989){
        menu.css("display", "block");
    } else{
        menu.css("display", "none");
    }
    klikMenu();
});

//Efek scroll
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0){
            $("nav").addClass("nama-putih");
            $("nav img.nama-hitam").show();
            $("nav img.nama-putih").hide();
        }else {
            $("nav").removeClass("nama-putih");
            $("nav img.nama-hitam").hide();
            $("nav img.nama-putih").show();
        }
    })
})