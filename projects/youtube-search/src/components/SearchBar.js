import React from 'react';

class SearchBar extends React.Component {
    state ={
        term: ''
    };
    onInputChange = (e) => {
        // console.log(e.target.value);
        this.setState({term: e.target.value});
        // console.log(this.state.term);
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        // TODO: make sure we call callback from parent component
        this.props.onFormSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="youtube-search">Search For A Video: </label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;