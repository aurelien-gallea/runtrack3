$('p').css('display', 'none');
$('.btn2').css('display', 'none');
$(document).ready(function () {
    $("#button").click(function (e) { 
        e.preventDefault();
        $('p').css('display','block');
        $('.btn2').css('display','block');

});

    
});
$(document).ready(function () {
    
    $(".btn2").click(function (e) { 
        e.preventDefault();
        $('p').css('display','none');
        $(".btn2").css('display','none');
    });
});