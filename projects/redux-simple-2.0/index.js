import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

// save API key
const API_KEY = 'AIzaSyCeQFc6S3-fAzMLiaWuYMxRB6D6YWIfqpc';

// create a new component that generates some HTML
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

// take generated HTML and insert into DOM
ReactDom.render(
        <App/>, 
        document.querySelector('.container')
); 