$('document').ready(function(){
    // $('#d1').hide();
    // $('#b1').click(function(){
        // $('#d1').show(3000);
        // $('#d2').hide(3000);
        // $('#d1').toggle(3000);
        // $('#d2').toggle(3000);
        // $('#d2').slideUp(3000);
        // $('#d1').slideDown(3000);
        // $('#d2').slideToggle(3000);
        // $('#d1').slideToggle(3000);
        // $('#d1').fadeIn(3000);
        // $('#d2').fadeOut(3000);
        // $('#d1').fadeToggle(3000);
        // $('#d2').fadeToggle(3000);
        // $('#d2').fadeTo(3000,0.4);
        // $('#d2').animate({'left' : 200, 'width' : 300},3000);
        // $('#d2').animate({'top' : 200,},3000);
        // $('#d2').animate({'left' : 0,},3000);
        // $('#d2').animate({'top' : 0,},3000);


        // $('#d1, #d3, #d6').text("<h4>Ammar</h4>");
        // $('#d1').html($('#in1').val());
        // $('#d2').css({
        //     'font-size' : 50,
        //     'color' : '#125201',
        //     'background-color' : '#FFFF00',
        // });
        // $('#d1').remove();

        // $('#d5').nextAll('div').css({
        //     'background-color' : '#00FF00',
        // });

        
        // });

        $("#filter").on("keyup", function() {
            // alert($(this).val());
            var value = $(this).val().toLowerCase();
            $("#content *").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
});



