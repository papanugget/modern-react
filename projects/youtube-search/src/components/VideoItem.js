import React from 'react';
import '../css/VideoItem.css';

const VideoItem = (props) => {
    const video = props.video;
    return (
        <div className="video-item item" key={video.id.videoId}>
            <img 
                className="ui image" 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title}
            />
            <div className="content">
                <a className="header">{video.snippet.title}</a>
                <div className="description">
                    {video.snippet.description}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;