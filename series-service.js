export const getEpisodeTitle = (show, seasonIndex, episodeIndex) =>
    show.seasons[seasonIndex].episodes[episodeIndex].title;

export const getLastSeasonNumber = (show) => 
    show.seasons.length === 0 ? 0 
: show.seasons[show.seasons.length -1].number; 

export const getNextSeasonYear = (show) => 
    show.nextSeason ? show.nextSeason.year : 
"No announcement" ;