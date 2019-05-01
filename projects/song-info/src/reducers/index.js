import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {   title: 'Just A Girl',
            artist: 'No Doubt',
            genre: 'Punk'
        },
        {   title: 'Go With The Flow',
            artist: 'Queens Of The Stone Age',
            genre: 'Rock'
        },
        {   title: 'Send My Love',
            artist: 'Adele',
            genre: 'Pop'
        },
        {   title: 'Misery Business',
            artist: 'Paramore',
            genre: 'Punk Pop'
        },
        {   title: 'Sorry Not Sorry',
            artist: 'Demi Lovato',
            genre: 'Pop'
        },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        // return the selected song details
        const details = action.payload;
        return details;
    }
    return selectedSong;
}

const songDatabaseReducer = ( songList = [], action) => {
    if(action.type === 'ADD_SONG') {
        return [...songList, action.payload];
    } else if(action.type === 'DELETE_SONG') {
        return songList.filter( song => song !== action.payload.song);
    }
    return songList;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    songDatabase: songDatabaseReducer,
});