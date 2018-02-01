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