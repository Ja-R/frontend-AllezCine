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


const featuredMovies = [
    {title: 'Winchester', genre: 'Horror', year: 2018, image: 'featuredvikings'},
    {title: 'A Fantastic Woman', genre: 'Drama', year: 2018, image: 'featuredvikings'},
    {title: 'The Cage Fighter', genre: 'Action', year: 2018, image: 'featuredvikings'},
    {title: 'Hostiles', genre: 'Adventure', year: 2017, image: 'featuredvikings'},
    {title: 'The Insult', genre: 'Drama', year: 2017, image: 'featuredvikings'},
    {title: 'Padman', genre: 'Comedy', year: 2018, image: 'featuredvikings'},
    {title: '12 Strong', genre: 'Action', year: 2018, image: 'featuredvikings'},
    {title: 'Den of Thieves', genre: 'Action', year:2018, image: 'featuredvikings'},
    {title: 'Star Wars: The Last Jedi', genre: 'Action', year: 2017, image: 'featuredvikings'},
    {title: 'The Commuter', genre: 'Action', year: 2018, image: 'featuredvikings'},
    {title: 'True Lies', genre: 'Comedy', year: 1994, image: 'featuredvikings'},
    {title: 'American Made', genre: 'Comedy', year: 2017, image: 'featuredvikings'},
    {title: 'Ant-Man', genre: 'Comedy', year: 2015, image: 'featuredvikings'},
    {title: 'Pixels', genre: 'Fantasy', year: 2015, image: 'featuredvikings'},
    {title: 'Colossal', genre: 'Fantasy', year: 2016, image: 'featuredvikings'},
    {title: 'Men in Black 3', genre: 'Fantasy', year: 2012, image: 'featuredvikings'},
    {title: 'Wild Wild West', genre: 'Fantasy', year: 1999, image: 'featuredvikings'},
    {title: 'Ghostbusters II', genre: 'Fantasy', year: 1989, image: 'featuredvikings'}
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