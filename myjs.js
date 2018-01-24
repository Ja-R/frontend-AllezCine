let featuredMoviesContainer = document.getElementById('featuredMoviesContainer');
let featuredSeriesContainer = document.getElementById('featuredSeriesContainer');
let moviesContainerChildren = featuredMoviesContainer.childNodes;
let seriesContainerChildren = featuredSeriesContainer.childNodes;
let showMovies = document.getElementById('showMoreOrLessMovies');
let showSeries = document.getElementById('showMoreOrLessSeries');
let allMoviesDisplayed = false;
let allSeriesDisplayed = false;

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

let displayFeatured = function (container, data, bool, button){
    bool = false;
    button.style.display = 'inline'
    button.innerHTML = 'Show More';
    container.innerHTML = "";
    for(let i=0; i<data.length; i++){
        let description = document.createTextNode(data[i].title + ' ' + data[i].genre + ' ' + data[i].year);
        
        let wrap = document.createElement('DIV');
        wrap.className = 'col-xl-2 feat_wrap';
        wrap.appendChild(description);
        
        if(i>=12){
            wrap.style.display = 'none';
        }

        container.appendChild(wrap);
    }
}
let showAllMovies = document.getElementById('showAllMovies');
showAllMovies.addEventListener('click', function(){
    displayFeatured(featuredMoviesContainer, featuredMovies, allMoviesDisplayed, showMovies);
});
let showAllSeries = document.getElementById('showAllSeries');
showAllSeries.addEventListener('click', function(){
    displayFeatured(featuredSeriesContainer, featuredMovies, allSeriesDisplayed, showSeries);
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
            let description = document.createTextNode(data[i].title + ' ' + data[i].genre + ' ' + data[i].year);
            
            let wrap = document.createElement('DIV');
            wrap.className = 'col-xl-2';
            wrap.appendChild(description);

        container.appendChild(wrap);
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
    genreFilter('Action', featuredSeriesContainer, featuredMovies, showSeries);
});
let showAllAdventureSeries = document.getElementById('showAllAdventureSeries');
showAllAdventureSeries.addEventListener('click', function(){
    genreFilter('Adventure', featuredSeriesContainer, featuredMovies, showSeries);
});
let showAllComedySeries = document.getElementById('showAllComedySeries');
showAllComedySeries.addEventListener('click', function(){
    genreFilter('Comedy', featuredSeriesContainer, featuredMovies, showSeries);
});
let showAllFantasySeries = document.getElementById('showAllFantasySeries');
showAllFantasySeries.addEventListener('click', function(){
    genreFilter('Fantasy', featuredSeriesContainer, featuredMovies, showSeries);
});
let showAllHorrorSeries = document.getElementById('showAllHorrorSeries');
showAllHorrorSeries.addEventListener('click', function(){
    genreFilter('Horror', featuredSeriesContainer, featuredMovies, showSeries);
});

displayFeatured(featuredMoviesContainer, featuredMovies, allMoviesDisplayed, showMovies);
displayFeatured(featuredSeriesContainer, featuredMovies, allSeriesDisplayed, showSeries);