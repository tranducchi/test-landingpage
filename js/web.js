
$( document ).ready(function() {
    $('ul.sub_menu_mobile').slideUp()
    $(".menu_mobile li a").click(function(e) {
        $('ul.sub_menu_mobile').slideUp()
        $(this).next().is(":visible") || $(this).next().slideDown(),
        e.preventDefault();
        console.log("clicked")
    })
    $('.button_menu_mobile').click(function(){
        $('.menu_mobile').toggleClass('active_menu');
    })
       
    
});