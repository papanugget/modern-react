import React from 'react';

const Error = () => {
    return (
        
        <div className="ui container">
        <h1>Hello</h1>
            <div className="ui card">
                <div className="content">
                    <div className="header">Error</div>
                    <hr/>
                        <div className="content">
                            <div className="ui sub header">
                                {this.state.errorMessage}
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Error;