import React from 'react';
import '../css/VideoItem.css';

const VideoItem = (props) => {
    const video = props.video;
    const onVideoSelect = props.onVideoSelect;
    return (
        <div 
            className="video-item item" 
            onClick={() => onVideoSelect(video)}>
            <img 
                className="ui image" 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title}
            />
            <div className="content">
                <p className="header">{video.snippet.title}</p>
            </div>
        </div>
    )
}

export default VideoItem;