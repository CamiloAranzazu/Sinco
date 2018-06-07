$(document).ready(function() {
    $('.item-box').on('click', 'button.info-link', function(event){
        event.preventDefault();      
        var a = 1;
        for (var i = 1; i <= 50; i++) {
            for (var j = 1; j <= 50; j++){
                if ( j <= i){
                    $('.item-box').append(a++)                    
                }
                if (a > 50){
                    break;
                }
            }
            if (a > 50){
                break;
            }
            a = 1
            $('.item-box').append('</br>')
        }
        $('button.info-link').attr('disabled',true);
	});	
});