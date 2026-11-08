//A
export const getEpisodeTitle = (show, seasonIndex, episodeIndex) =>
    show.seasons[seasonIndex].episodes[episodeIndex].title;

export const getLastSeasonNumber = (show) => 
    show.seasons.length === 0 ? 0 
: show.seasons[show.seasons.length -1].number; 

export const getNextSeasonYear = (show) => 
    show.nextSeason ? show.nextSeason.year : 
"No announcement" ;

//B 
export const getById = (series, id) =>
    series.find(show => show.id === id);

export const getSeasonsCount = (series) => 
    series.map(show => ({
        title: show.title,
        seasons: show.seasons.length
    }));
    
 export const hasTopEpisode = (show, minRating) =>
     show.seasons.some(season =>
        season.episodes.some(episodes => 
            episodes.rating >= minRating )
        );
        
 export const getCreatorsFrom = (series, country) =>
    series.filter(
        show => show.creator.country === country)
         .map(show => show.creator.name);
            
    
export const sortByStartYear = (series) =>
    series.toSorted((a,b) => a.startYear - b.startYear);

