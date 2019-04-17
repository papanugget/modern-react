import axios from 'axios';
const KEY ='AIzaSyAao_MWF0Uh6yURapF3oyYQkrvpLZeI-oM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY 
    }
})