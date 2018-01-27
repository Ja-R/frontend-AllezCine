$(document).ready(function(){


const filmsSlide = [
    {title: 'Pentagon Papers', director: 'Steven Spielberg', genre: 'Drame, Historique, Biopic', year: 2017, casting: 'Tom Hanks et Meryl Streep', trailor: 'https://www.youtube.com/embed/whFAsePy-w8', description: 'Première femme directrice de la publication d\'un grand journal américain, The Washington Post, Katharine Graham s\'associe à son rédacteur en chef Ben Bradlee pour dévoiler un scandale d\’État monumental et combler son retard par rapport au New York Times qui mène ses propres investigations...'},
    {title: 'The Greatest Showman', director: 'Michael Gracey', genre: 'biopic, comedie dramatique, musique', year: 2018, casting: 'Hugh Jackman, Rebecca Ferguson, Zac Efron, Michelle Williams et Zendaya', trailer: 'https://www.youtube.com/embed/AXCTMGYUg9A', description: 'Découvrez l\’histoire de P.T Barnum, un visionnaire parti de rien pour créer un spectacle devenu un phénomène planétaire...'},
    {title: 'La Douleur', director: 'Emmanuel Finkiel', genre: 'drame', year: 2018 ,casting: 'Mélanie Thierry et Benoit Magimel', trailer: 'https://www.youtube.com/embed/J6-Y_kErP4s', description: 'Juin 1944, la France est toujours sous l\’Occupation allemande. L\’écrivain Robert Antelme, figure majeure de la Résistance, est arrêté et déporté...'},
    {title: 'Fortunata', director: 'Sergio Castellitto', genre: 'drame', year: 2018, casting: 'Jasmine Trinca', trailer: 'https://www.youtube.com/embed/9V58R_y96SM', description: 'Fortunata a une vie tourmentée, une fille de huit ans et un mariage raté derrière elle...'},
    {title: 'Veranica', director: 'Paco Plaza', genre: 'horreur', year: 2018, casting: 'Sandra Escacena et Ana Torrent', trailer: 'https://www.youtube.com/embed/kPckkaL8-6I', description: 'Madrid, années 90. Après avoir fait une séance de spiritisme avec des amies, une adolescente est harcelée par de mystérieuses présences qui menacent de s\’en prendre à toute sa famille.'},
    {title: 'The Passenger', director: 'Jaume Collet-Serra', genre: 'thriller, drame', year: 2018, casting: 'Liam Neeson, Vera Farmiga et Patrick Wilson', trailer: 'https://www.youtube.com/embed/Wn5bRAR3_Wo', description: 'Comme tous les jours après son travail, Michael MacCauley prend le train de banlieue qui le ramène chez lui...'},
    {title: 'Handia', director: 'Aitor Arregi et Jon Garaño', genre: 'drame', year: 2018, casting: 'Eneko Sagardoy, Joseba Usabiaga, Ramon Agirre', trailer: 'https://www.youtube.com/embed/ScIR4Eyw2f0', description: 'Pays basque, 1836. Après avoir combattu pendant la Première Guerre carliste, Martin Eleizegi retourne dans sa ferme familiale en Guipuzcoa...'},
    {title: 'Jean Douchet', director: 'Fabien Hagege, Guillaume Namur et Vincent Haasser', genre: 'documentaire', year:2018, casting: 'Jean Douchet', trailer: 'https://www.youtube.com/embed/N3jxSvMbPNA', description: 'Jean Douchet est un passeur. Depuis une cinquantaine d\’années, il est un critique de cinéma influent...'},
    {title: 'Hannah', director: 'Andrea Pallaoro', genre: 'drame', year: 2017, casting: 'Charlotte Rampling', trailer: 'https://www.youtube.com/embed/J5mgXBMGbF4', description: 'Hannah dresse le portrait intime d\'une femme dont la vie bascule lorsqu\'elle doit survivre, entre réalité et déni, à l\'arrestation de son mari...'},
    {title: 'Marie Curie', director: 'Marie-Noëlle Sehr', genre: 'biopic', year: 2018, casting: 'Karolina Gruszka et Charles Berling', trailer: 'https://www.youtube.com/embed/h0iEV7a63-Q', description: 'Physicienne chimiste d\'origine polonaise, Marie Curie est une pionnière dans l\'étude de la radioactivité...'},
];

// console.log(filmsSlide[2].director)

    // changement dans modal

    var listeImgSlide = document.querySelectorAll('.imgFilm');
    var listeNomSlide = document.querySelectorAll('.nomFilm');
    // console.log(listeImgSlide[9]);
    // console.log(listeNomSlide.length);
    for (i=0; i<llisteNomSlide.length && i<llisteImgSlide.length){

    }

    function remplaceInfos(){
      $('.modalTitreFiche').text(filmsSlide[2].title);
      $('iframe #ficheTrailer').attr({
        src: 'filmsSlide[2].trailer'
      });
      $('#ficheInfo').text(filmsSlide[2].director + ", " + filmsSlide[2].genre + ", " + filmsSlide[2].year + ", avec " + filmsSlide[2].casting);
      $('#syno').text(filmsSlide[2].description);
    }

    $('.modalFilm').click(function () {
      remplaceInfos()
    });


});
