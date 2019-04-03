import React from 'react';

const Error = (props) => {
    // console.log(props);
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">
            <div className="ui container">
                <h1>Error</h1>
                    <div className="content">
                        <hr/>
                        <div className="content">
                            <div className="ui sub header">
                                {props.error}
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        

    );
}

export default Error;