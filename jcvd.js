let subTotalField = document.getElementById('subTotalField');
let deliveryFeesField = document.getElementById('deliveryFeesField');
$("input[type=number]").on('keyup input' || 'change' || 'mousewheel', function(){
    let subTotal = parseInt($('input[type=number]').val())*10;
    if(subTotal <= 15){
        let total = subTotal + 10;
        subTotalField.innerHTML = 'Sous-Total: ' + subTotal + ' euros';
        deliveryFeesField.innerHTML = 'Frais de Ports: 10 euros';
        $('#total').html('Total: ' + total + ' euros');
    }
    else if(subTotal >= 16 && subTotal <= 30){
        let total = subTotal + 7;
        subTotalField.innerHTML = 'Sous-Total: ' + subTotal + ' euros';
        deliveryFeesField.innerHTML = 'Frais de Ports: 7 euros';
        $('#total').html('Total: ' + total + ' euros');
    }
    else if(subTotal >= 31){
        subTotalField.innerHTML = 'Sous-Total: ' + subTotal + ' euros';
        deliveryFeesField.innerHTML = 'Frais de Ports: Offerts!';
        $('#total').html('Total: ' + subTotal + ' euros');
    }
});