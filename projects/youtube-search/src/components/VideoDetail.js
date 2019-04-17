import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;
    // conditional because selectedVideo is initially null
    if(!video) {
        return <div>Loading...</div>
    }
    return (
        <div >
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;