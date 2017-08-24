$(document).ready(function(){

    $('ul.tabai li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabai li').removeClass('dabartinis');
        $('.tab-turinys').removeClass('dabartinis');

        $(this).addClass('dabartinis');
        $("#"+tab_id).addClass('dabartinis');
    })

})