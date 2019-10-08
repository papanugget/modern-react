import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;
    // conditional because selectedVideo is initially null
    if(!video) {
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    const videoDate = new Date(video.snippet.publishedAt).toLocaleDateString() + ' at ' + new Date(video.snippet.publishedAt).toLocaleTimeString();
    // console.log(videoDate);
    return (
        <div >
            <div className="ui embed">
                <iframe src={videoSrc} title={video.snippet.title}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
                <p>This video was published on {videoDate}</p>
            </div>
        </div>
    )
}

export default VideoDetail;