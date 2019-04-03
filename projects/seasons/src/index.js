import React from 'react';
import ReactDOM from 'react-dom';
import Error from './Error';
import LatLong from './LatLong';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // constructor-less alternate state init
    state = {
        lat: null,
        long: null,
        errorMessage: ''
    };
    // constructor-less refactor
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude, long:position.coords.longitude}),
            err => this.setState({errorMessage:err.message})
        );
    }
    // helper method to contain multiple conditionals - kept out of main render method
    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return (
                <Error error={this.state.errorMessage}/>
            );
        }
        if(this.state.lat && !this.state.errorMessage) {
            return (
                <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
                // <LatLong lat={this.state.lat} long={this.state.long}/>
            );
        }
        return <Spinner message="Please accept the location request..."/>
    }
    // render method is required for React
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));