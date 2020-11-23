import axios from 'axios';


const KEY ='AIzaSyBjCZOjMSEZ0x_UT0Z0y7GD-oWR8DzXPD0';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,

    }
});
