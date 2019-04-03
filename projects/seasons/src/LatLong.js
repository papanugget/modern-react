import React from 'react';

const LatLong = (props) => {
    // console.log(props);
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <div className="ui container">
                    <div className="content">
                        <h1>Player Position</h1>
                        <hr/>
                            <div className="content">
                                <div className="ui sub header">
                                    Latitude: {props.lat}
                                </div>
                                <div className="ui sub header">
                                    Longitude: {props.long}
                                </div>
                            </div>
                    </div>
                </div>        
            </div>
        </div>
    )
}

export default LatLong;