let priceField = document.getElementById('priceField');
let subTotalField = document.getElementById('subTotalField');
let deliveryFeesField = document.getElementById('deliveryFeesField');
let modalTitle = document.getElementById('modalTitle');
let details = document.getElementById('details');
let modalImg = document.getElementById('modalImg');

let goodiesList = [
    {name: 'Les Noisettes', priceValue: 10, price: '10 euros/200g', imgRef: 'assets/image/img jcvd/noisettes.jpeg', description: "<p>Voici les fameuses noisettes cassés par JC! Elles ont ensuite été cuîte au feu de bois et salé au sel fin de Guérande.</p><em>Dû à la quantité de noisettes cassés, les noisettes sont enveloppées de soie pendant le processus d'ouverture. Pour des noisettes ouvertes en contact directe avec les fesses de JC, veuillez contacter notre service client au 0800 JCVD</em>"},
    {name: 'Plus de Noisettes', priceValue: 30, price: '30 euros/kg', imgRef: 'assets/image/img jcvd/noisettes.jpeg', description: "<p>Voici les fameuses noisettes cassés par JC! Elles ont ensuite été cuîte au feu de bois et salé au sel fin de Guérande.</p><em>Dû à la quantité de noisettes cassés, les noisettes sont enveloppées de soie pendant le processus d'ouverture. Pour des noisettes ouvertes en contact directe avec les fesses de JC, veuillez contacter notre service client au 0800 JCVD</em>"},
    {name: 'Encore Plus de Noisettes', priceValue: 50, price: '50 euros/2kg', imgRef: 'assets/image/img jcvd/noisettes.jpeg', description: "<p>Voici les fameuses noisettes cassés par JC! Elles ont ensuite été cuîte au feu de bois et salé au sel fin de Guérande.</p><em>Dû à la quantité de noisettes cassés, les noisettes sont enveloppées de soie pendant le processus d'ouverture. Pour des noisettes ouvertes en contact directe avec les fesses de JC, veuillez contacter notre service client au 0800 JCVD</em>"},
    {name: '1 High-Kick de JC', priceValue: 50, price: '50 euros le coup', imgRef: 'assets/image/img jcvd/jcvdsession.jpeg', description: "<p>Devenez l'un des rares chanceux à avoir reçu un coup de pied de JC!</p>"},
    {name: '2 High-Kicks de JC', priceValue: 70, price: '35 euros le coup', imgRef: 'assets/image/img jcvd/jcvdsession.jpeg', description: "<p>Devenez l'un des rares chanceux à avoir reçu un coup de pied de JC!</p>"},
    {name: '3 High-Kicks de JC', priceValue: 90, price: '30 euros le coup', imgRef: 'assets/image/img jcvd/jcvdsession.jpeg', description: "<p>Devenez l'un des rares chanceux à avoir reçu un coup de pied de JC!</p>"}
];

let fillTheModal = function(product){
    modalTitle.innerHTML = product.name;
    priceField.innerHTML = product.price;
    details.innerHTML = product.description;
    modalImg.src = product.imgRef;
    $("input[type=number]").on('keyup input change mousewheel focusin focusout', function(){
        let subTotal = parseInt($('input[type=number]').val())*product.priceValue;
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
}
