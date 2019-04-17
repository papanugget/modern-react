import React from 'react';
import '../css/VideoItem.css';

const VideoItem = (props) => {
    const video = props.video;
    const onVideoSelect = props.onVideoSelect;
    return (
        <div className="video-item item" key={video.id.videoId} onClick={() => onVideoSelect(video)}>
            <img 
                className="ui image" 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title}
            />
            <div className="content">
                <a className="header">{video.snippet.title}</a>
            </div>
        </div>
    )
}

export default VideoItem;