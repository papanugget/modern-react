import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    // add state to contain returned videos data
    state = {
        videos: []
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
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                I found {this.state.videos.length} videos.
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}


export default App;