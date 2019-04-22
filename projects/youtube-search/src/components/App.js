import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    // add state to contain returned videos data
    state = {
        videos: [],
        selectedVideo: null
    };

    // refactor to async func
    onTermSubmit = async (term) => {
        // console.log(term);
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // console.log(res);
        this.setState({ videos: res.data.items})
        // console.log(this.state);
    };
    onVideoSelect = (video) => {
        // console.log('From the App!' , video);
        this.setState({selectedVideo: video})
        // console.log(this.state);
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                    
                </div>
                {/* I found {this.state.videos.length} videos. */}
                
            </div>
        )
    }
}


export default App;