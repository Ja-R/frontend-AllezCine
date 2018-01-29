
$("input[type=number]").on('keyup input' || 'change' || 'mousewheel' || 'load', function(){
    let subTotal = parseInt($('input[type=number]').val())*10;
    if(subTotal <= 15){
        let total = subTotal + 10;
        $('#total').html('Total: ' + total + ' euros (10 euros de frais de livraisons inclus).');
    }
    else if(subTotal >= 16 && subTotal <= 30){
        let total = subTotal + 7;
        $('#total').html('Total: ' + total + ' euros (7 euros de frais de livraisons inclus).');
    }
    else if(subTotal >= 31){
        $('#total').html('Total: ' + subTotal + ' euros (Les frais de ports sont offerts!).');
    }
});