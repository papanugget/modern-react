import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        icon: 'massive sun icon'
    },
    winter: {
        text: "Brrrr, it's cold!",
        icon: 'massive snowflake icon'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const getMonth = () => {
    let monthName = '';
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = new Date().getMonth();
    return monthName = months[month];
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const month = getMonth();
    // const text = season === 'winter' ? "Brrrr, it's cold!" : "Let's hit the beach!";
    // const icon = season === 'winter' ? 'snowflake icon': 'sun icon';
    const { text, icon } = seasonConfig[season]
    const lat = props.lat;
    const long = props.long;
    // console.log(season);
    return (
        <div className={`ui middle aligned center aligned grid season-display ${season}`}>
        <div className="column">
            <div className="ui container">
                <div className="content">
                    <i className={`icon-left ${icon}`}/>
                    <h1>{text} It's {month}</h1>
                    <i className={`icon-right ${icon}`}/>
                    <hr/>
                        <div className="content">
                            <div className="ui sub header">
                                Latitude: {lat}
                            </div>
                            <div className="ui sub header">
                                Longitude: {long}
                            </div>
                        </div>
                </div>
            </div>        
        </div>
    </div>
        
    );
};

export default SeasonDisplay;