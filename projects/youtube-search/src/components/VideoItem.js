import React from 'react';

const VideoItem = (props) => {
    const video = props.video;
    return (
        <div>
            This is a video item
            {video.snippet.title}
            <img src={video.snippet.thumbnails.medium.url}/>
        </div>
    )
}

export default VideoItem;