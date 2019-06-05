import React from 'react';
import { connect } from 'react-redux';
// import { statement } from '@babel/template';

const SongDetail = ({song}) => {
    console.log(song);
    return (
        !song ? <h3>Please select a song</h3> : <div>
            <h3>Details for""{song.title }": </h3>
            <p>
                Title: {song.title}
                <br/>
                Aritst: {song.artist}
                <br/>
                Genre: {song.genre}
            </p>
        </div>
    )
    // if(!song) {
    //     return <div>Please select a song</div>
    // } else {
    //     return (
    //         <div className="container">
    //             <div>{song.artist}</div>
    //             <div>{song.title}</div>
    //             <div>{song.genre}</div>
    //         </div>

    //     )
    // }
};

const mapStateToProps = (state) => {
    return  { song: state.selectedSong }
 };

export default connect(mapStateToProps) (SongDetail);