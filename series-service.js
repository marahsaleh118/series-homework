import { title } from "node:process";

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

//C 
export const renameSeries = (series, id, newTitle) => 
    series.map(newMovie => 
        newMovie.id === id ? 
        {...newMovie, title: newTitle }
        : newMovie
    );

export const addSeason = (series, showId, season) => 
    series.map(newSeason => 
        newSeason.id === showId
        ?{...newSeason, seasons: [...newSeason.seasons,season]
        } :newSeason
    );

    export const addEpisode = (series, showId, seasonNumber, episode)=> 
        series.map(newEpisode => 
            newEpisode.id === showId
            ?{
                ...newEpisode, seasons: newEpisode.seasons.map(season =>
                    season.number === seasonNumber ?{
                        ...season, episodes: [...season.episodes,episode]
                    } :season
                )
            } :newEpisode 
        );
