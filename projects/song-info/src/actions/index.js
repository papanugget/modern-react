// action creator
export const selectSong = (song) => {
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

export const deleteSong = (song) => {
    return {
        type: 'SONG_DELETED',
        payload: song
    }
}

export const addSong = (title, artist, genre) => {
    return {
        type: 'ADD_SONG',
        payload: {
            title: title,
            artist: artist,
            genre: genre
        }
    }
}

// named export