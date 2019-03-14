$(function(){
    $(window).scroll(function(){
        //navbar状态的切换
        var st = $(window).scrollTop()
        if(st > 250) {
            $('.navbar').addClass('navbar-fixed-top')
            
        }else{
           $('.navbar').removeClass('navbar-fixed-top')
        }
    })
})