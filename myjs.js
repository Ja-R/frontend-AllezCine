const featuredMoviesContainer = document.getElementById('featuredMoviesContainer');
const featuredSeriesContainer = document.getElementById('featuredSeriesContainer');
let moviesContainerChildren = featuredMoviesContainer.childNodes;
let seriesContainerChildren = featuredSeriesContainer.childNodes;
let showMovies = document.getElementById('showMoreOrLessMovies');
let showSeries = document.getElementById('showMoreOrLessSeries');
let allMoviesDisplayed = false;
let allSeriesDisplayed = false;
let moviesButtonsRow = document.getElementById('moviesButtonsRow');
let moviesButtonsRowChildren = moviesButtonsRow.childNodes;
let seriesButtonsRow = document.getElementById('seriesButtonsRow');
let seriesButtonsRowChildren = seriesButtonsRow.childNodes;

// Detect JS support
document.body.className = document.body.className + " js_enabled";

(function() {

    /**
     * Set cookie
     *
     * @param string name
     * @param string value
     * @param int days
     * @param string path
     * @see http://www.quirksmode.org/js/cookies.html
     */
    function createCookie(name,value,days,path) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path="+path;
    }

    /**
     * Read cookie
     * @param string name
     * @returns {*}
     * @see http://www.quirksmode.org/js/cookies.html
     */
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    var cookieMessage = document.getElementById('cookie-message');
    if (cookieMessage == null) {
        return;
    }
    var cookie = readCookie('seen-cookie-message');
    if (cookie != null && cookie == 'yes') {
        cookieMessage.style.display = 'none';
    } else {
        cookieMessage.style.display = 'block';
    }
    
    // Set/update cookie
    var cookieExpiry = cookieMessage.getAttribute('data-cookie-expiry');
    if (cookieExpiry == null) {
        cookieExpiry = 30;
    }
    var cookiePath = cookieMessage.getAttribute('data-cookie-path');
    if (cookiePath == null) {
        cookiePath = "/";
    }
    createCookie('seen-cookie-message','yes',cookieExpiry,cookiePath);

})();

const featuredMovies = [
    {title: 'Winchester', genre: 'Horror', year: 2018},
    {title: 'A Fantastic Woman', genre: 'Drama', year: 2018},
    {title: 'The Cage Fighter', genre: 'Action', year: 2018},
    {title: 'Hostiles', genre: 'Adventure', year: 2017},
    {title: 'The Insult', genre: 'Drama', year: 2017},
    {title: 'Padman', genre: 'Comedy', year: 2018},
    {title: '12 Strong', genre: 'Action', year: 2018},
    {title: 'Den of Thieves', genre: 'Action', year:2018},
    {title: 'Star Wars: The Last Jedi', genre: 'Action', year: 2017},
    {title: 'The Commuter', genre: 'Action', year: 2018},
    {title: 'True Lies', genre: 'Comedy', year: 1994},
    {title: 'American Made', genre: 'Comedy', year: 2017},
    {title: 'Ant-Man', genre: 'Comedy', year: 2015},
    {title: 'Pixels', genre: 'Fantasy', year: 2015},
    {title: 'Colossal', genre: 'Fantasy', year: 2016},
    {title: 'Men in Black 3', genre: 'Fantasy', year: 2012},
    {title: 'Wild Wild West', genre: 'Fantasy', year: 1999},
    {title: 'Ghostbusters II', genre: 'Fantasy', year: 1989}
];

const featuredSeries = [
    {title: 'Black Mirror', genre: 'Fantasy', year: 2011, image: 'featuredblackmirror'},
    {title: 'Vikings', genre: 'Action', year: 2013, image: 'featuredvikings'},
    {title: 'Shameless', genre: 'Comedy', year: 2011, image: 'featuredshameless'},
    {title: 'The End of the F***ing World', genre: 'Drama', year: 2017, image: 'featuredtheendofthef***ingworld'},
    {title: 'Game of Thrones', genre: 'Drama', year: 2011, image: 'featuredgameofthrones'},
    {title: 'Stranger Things', genre: 'Adventure', year: 2016, image: 'featuredstrangerthings'},
    {title: 'Grey\'s Anatomy', genre: 'Drama', year: 2018, image: 'featuredgreysanatomy'},
    {title: 'The Flash', genre: 'Action', year:2014, image: 'featuredtheflash'},
    {title: 'Peaky Blinders', genre: 'Drama', year: 2013, image: 'featuredpeakyblinders'},
    {title: 'Star Trek: Discovery', genre: 'Fantasy', year: 2017, image: 'featuredstartrek'},
    {title: 'The Good Doctor', genre: 'Drama', year: 2017, image: 'featuredthegooddoctor'},
    {title: 'The Gifted', genre: 'Drama', year: 2017, image: 'featuredthegifted'},
    {title: 'The Handmaid\'s Tale', genre: 'Comedy', year: 2017, image: 'featuredthehandmaidstale'},
    {title: 'Agents of S.H.I.E.L.D.', genre: 'Action', year: 2013, image: 'featuredagentsofshield'},
    {title: 'Riverdale', genre: 'Fantasy', year: 2017, image: 'featuredriverdale'},
    {title: 'Arrow', genre: 'Action', year: 2012, image: 'featuredarrow'},
    {title: 'The Crown', genre: 'Drama', year: 2016, image: 'featuredthecrown'},
    {title: 'Black Lightning', genre: 'Action', year: 2018, image: 'featuredblacklightning'}
];

let displayFeatured = function (container, data, bool, button){
    bool = false;
    button.style.display = 'inline'
    button.innerHTML = 'Show More';
    container.innerHTML = "";
    for(let i=0; i<data.length; i++){
        let poster = document.createElement('img');
        poster.className = 'poster';
        poster.src = 'asset/image/' + data[i].image + '.jpg';
        
        let pTitle = document.createElement('P');
        pTitle.className = 'text-center m-0';
        pTitle.appendChild(document.createTextNode(data[i].title));

        let descriptionListElementYear = document.createElement('LI');
        descriptionListElementYear.appendChild(document.createTextNode(data[i].year));

        let descriptionListElementGenre = document.createElement('LI');
        descriptionListElementGenre.className = 'font-weight-bold';
        descriptionListElementGenre.appendChild(document.createTextNode(data[i].genre));

        let descriptionList = document.createElement('UL');
        descriptionList.className = 'info-films d-flex justify-content-between';
        descriptionList.appendChild(descriptionListElementYear);
        descriptionList.appendChild(descriptionListElementGenre);

        
        let description = document.createElement('DIV');
        description.appendChild(pTitle);
        description.appendChild(descriptionList);

        
        let wrap = document.createElement('DIV');
        wrap.className = 'col-8 offset-2 col-sm-4 offset-sm-1 col-md-3 offset-md-0 col-lg-2 col-xl-2 feat_wrap';
        wrap.appendChild(poster);
        wrap.appendChild(description);
        
        if(i>=12){
            wrap.style.display = 'none';
        }

        container.appendChild(wrap);
    }
    if(container == featuredMoviesContainer){
        for(let i=0; i<moviesButtonsRowChildren.length; i++){
            if(moviesButtonsRowChildren[i] !== '#text'){
                moviesButtonsRowChildren[i].className = 'genre_button';
            }
        }
        showAllMovies.className += ' active';
    }
    else if(container == featuredSeriesContainer){
        for(let i=0; i<seriesButtonsRowChildren.length; i++){
            if(seriesButtonsRowChildren[i] !== '#text'){
                seriesButtonsRowChildren[i].className = 'genre_button';
            }
        }
        showAllSeries.className += ' active';
    }
}
let showAllMovies = document.getElementById('showAllMovies');
showAllMovies.addEventListener('click', function(){
    displayFeatured(featuredMoviesContainer, featuredMovies, allMoviesDisplayed, showMovies);
});
let showAllSeries = document.getElementById('showAllSeries');
showAllSeries.addEventListener('click', function(){
    displayFeatured(featuredSeriesContainer, featuredSeries, allSeriesDisplayed, showSeries);
});

let showMoreOrLessMovies = function(){
    if(allMoviesDisplayed == false){
        for(let i=1; i<moviesContainerChildren.length; i++){
            moviesContainerChildren[i].style.display = 'inline';
        }
        allMoviesDisplayed = true;
        showMovies.innerHTML = 'Show Less';
    }
    else if(allMoviesDisplayed == true){
        for(let i=12; i<moviesContainerChildren.length; i++){
            moviesContainerChildren[i].style.display = 'none';
        }
        allMoviesDisplayed = false;
        showMovies.innerHTML = 'Show More'
    }
}

showMovies.addEventListener('click', showMoreOrLessMovies);

let showMoreOrLessSeries = function(){
    if(allSeriesDisplayed == false){
        for(let i=1; i<seriesContainerChildren.length; i++){
            seriesContainerChildren[i].style.display = 'inline';
        }
        allSeriesDisplayed = true;
        showSeries.innerHTML = 'Show Less';
    }
    else if(allSeriesDisplayed == true){
        for(let i=12; i<seriesContainerChildren.length; i++){
            seriesContainerChildren[i].style.display = 'none';
        }
        allSeriesDisplayed = false;
        showSeries.innerHTML = 'Show More'
    }
}

showSeries.addEventListener('click', showMoreOrLessSeries);

let genreFilter = function(filter, container, data, button){
    container.innerHTML = "";
    button.style.display = 'none';
    for(let i=0; i<data.length; i++){
        if(data[i].genre == filter){
            let poster = document.createElement('img');
            poster.className = 'poster';
            poster.src = 'asset/image/' + data[i].image + '.jpg';

            let pTitle = document.createElement('P');
            pTitle.className = 'text-center m-0';
            pTitle.appendChild(document.createTextNode(data[i].title));

            let descriptionListElementYear = document.createElement('LI');
            descriptionListElementYear.appendChild(document.createTextNode(data[i].year));

            let descriptionListElementGenre = document.createElement('LI');
            descriptionListElementGenre.className = 'font-weight-bold';
            descriptionListElementGenre.appendChild(document.createTextNode(data[i].genre));

            let descriptionList = document.createElement('UL');
            descriptionList.className = 'info-films d-flex justify-content-between';
            descriptionList.appendChild(descriptionListElementYear);
            descriptionList.appendChild(descriptionListElementGenre);

            
            let description = document.createElement('DIV');
            description.appendChild(pTitle);
            description.appendChild(descriptionList);
            
            let wrap = document.createElement('DIV');
            wrap.className = 'col-8 offset-2 col-sm-4 offset-sm-1 col-md-3 offset-md-0 col-lg-2 col-xl-2 feat_wrap';
            wrap.appendChild(poster);
            wrap.appendChild(description);

        container.appendChild(wrap);
        }
    }
    if(container == featuredMoviesContainer){
        for(let i=0; i<moviesButtonsRowChildren.length; i++){
            if(moviesButtonsRowChildren[i] !== '#text'){
                moviesButtonsRowChildren[i].className = 'genre_button';
            }
        }
        switch (filter) {
            case 'Action' :
                showAllActionMovies.className += ' active'
                break;
            case 'Adventure':
                showAllAdventureMovies.className += ' active'
                break;
            case 'Comedy':
                showAllComedyMovies.className += ' active'
                break;
            case 'Fantasy':
                showAllFantasyMovies.className += ' active'
                break;
            case 'Horror':
                showAllHorrorMovies.className += ' active'
                break;
        
            default:
                showAllMovies.className += ' active'
                break;
        }
    }
    else if(container == featuredSeriesContainer){
        for(let i=0; i<seriesButtonsRowChildren.length; i++){
            if(seriesButtonsRowChildren[i] !== '#text'){
                seriesButtonsRowChildren[i].className = 'genre_button';
            }
        }
        switch (filter) {
            case 'Action' :
                showAllActionSeries.className += ' active'
                break;
            case 'Adventure':
                showAllAdventureSeries.className += ' active'
                break;
            case 'Comedy':
                showAllComedySeries.className += ' active'
                break;
            case 'Fantasy':
                showAllFantasySeries.className += ' active'
                break;
        
            default:
                showAllSeries.className += ' active'
                break;
        }
    }

}
let showAllActionMovies = document.getElementById('showAllActionMovies');
showAllActionMovies.addEventListener('click', function(){
    genreFilter('Action', featuredMoviesContainer, featuredMovies, showMovies);
});
let showAllAdventureMovies = document.getElementById('showAllAdventureMovies');
showAllAdventureMovies.addEventListener('click', function(){
    genreFilter('Adventure', featuredMoviesContainer, featuredMovies, showMovies);
});
let showAllComedyMovies = document.getElementById('showAllComedyMovies');
showAllComedyMovies.addEventListener('click', function(){
    genreFilter('Comedy', featuredMoviesContainer, featuredMovies, showMovies);
});
let showAllFantasyMovies = document.getElementById('showAllFantasyMovies');
showAllFantasyMovies.addEventListener('click', function(){
    genreFilter('Fantasy', featuredMoviesContainer, featuredMovies, showMovies);
});
let showAllHorrorMovies = document.getElementById('showAllHorrorMovies');
showAllHorrorMovies.addEventListener('click', function(){
    genreFilter('Horror', featuredMoviesContainer, featuredMovies, showMovies);
});
let showAllActionSeries = document.getElementById('showAllActionSeries');
showAllActionSeries.addEventListener('click', function(){
    genreFilter('Action', featuredSeriesContainer, featuredSeries, showSeries);
});
let showAllAdventureSeries = document.getElementById('showAllAdventureSeries');
showAllAdventureSeries.addEventListener('click', function(){
    genreFilter('Adventure', featuredSeriesContainer, featuredSeries, showSeries);
});
let showAllComedySeries = document.getElementById('showAllComedySeries');
showAllComedySeries.addEventListener('click', function(){
    genreFilter('Comedy', featuredSeriesContainer, featuredSeries, showSeries);
});
let showAllFantasySeries = document.getElementById('showAllFantasySeries');
showAllFantasySeries.addEventListener('click', function(){
    genreFilter('Fantasy', featuredSeriesContainer, featuredSeries, showSeries);
});


displayFeatured(featuredMoviesContainer, featuredMovies, allMoviesDisplayed, showMovies);
displayFeatured(featuredSeriesContainer, featuredSeries, allSeriesDisplayed, showSeries);


const trailersList = [
    {title: 'Les Tuches 3', url: 'https://www.youtube.com/embed/4839KJuXfGc?rel=0&amp;controls=0', year: '18888'},
    {title: 'Star Wars I', url: 'https://www.youtube.com/embed/bD7bpG-zDJQ?rel=0&amp;controls=0', year: '18888'},
    {title: 'Star Wars II', url: 'https://www.youtube.com/embed/gYbW1F_c9eM?rel=0&amp;controls=0', year: '18888'},
    {title: 'Star Wars III', url: 'https://www.youtube.com/embed/5UnjrG_N8hU?rel=0&amp;controls=0', year: '18888'},
    {title: 'Star Wars IV', url: 'https://www.youtube.com/embed/9gvqpFbRKtQ?rel=0&amp;controls=0', year: '18888'},
    {title: 'Star Wars V', url: 'https://www.youtube.com/embed/JNwNXF9Y6kY?rel=0&amp;controls=0', year: '18888'},
    {title: 'Star Wars VI', url: 'https://www.youtube.com/embed/5UfA_aKBGMc?rel=0&amp;controls=0', year: '18888'},
    {title: 'Star Wars VII', url: 'https://www.youtube.com/embed/sGbxmsDFVnE?rel=0&amp;controls=0', year: '18888'},
    {title: 'Star Wars VIII', url: 'https://www.youtube.com/embed/Q0CbN8sfihY?rel=0&amp;controls=0', year: '18888'},
    {title: 'Rogue One: A Star Wars Story', url: 'https://www.youtube.com/embed/frdj1zb9sMY?rel=0&amp;controls=0', year: '18888'},
    {title: 'The Matrix', url: 'https://www.youtube.com/embed/vKQi3bBA1y8?rel=0&amp;controls=0', year: '18888'},
    {title: 'The Matrix Reloaded', url: 'https://www.youtube.com/embed/kYzz0FSgpSU?rel=0&amp;controls=0', year: '18888'},
    {title: 'The Matrix Revolutions', url: 'https://www.youtube.com/embed/hMbexEPAOQI?rel=0&amp;controls=0', year: '18888'}
];

const trailerFrame = document.getElementById('trailerFrame');
const trailerTitle = document.getElementById('trailerTitle');
const trailerYear = document.getElementById('trailerYear');

trailerFrame.src;

let showTrailer = function(title){
    for(let i=0; i<trailersList.length; i++){
        if(title == trailersList[i].title){
            trailerFrame.src = trailersList[i].url;
            trailerTitle.innerHTML = title;
            trailerYear.innerHTML = trailersList[i].year;
        }
    }
}

const formFirstName = document.getElementById('formFirstName');
const formLastName = document.getElementById('formLastName');
const formEmail = document.getElementById('formEmail');
const formSubject = document.getElementById('formSubject');
const modalFirstName = document.getElementById('modalFirstName');
const modalLastName = document.getElementById('modalLastName');
const modalEmail = document.getElementById('modalEmail');
const modalSubject = document.getElementById('modalSubject');

let fillModal = function(){
    modalFirstName.innerHTML = 'First Name: ' + formFirstName.value;
    modalLastName.innerHTML = 'Last Name: ' + formLastName.value;
    modalEmail.innerHTML = 'Email: ' + formEmail.value;
    modalSubject.innerHTML = 'Subject of your message: ' + formSubject.value;
}