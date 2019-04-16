import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="youtube-search">Search For A Video: </label>
                <input type="text"/>
            </form>
        )
    }
}

export default SearchBar;