import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        // const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`, {
            params: {
                bl_latitude: '11.847676',
                tr_latitude: '12.838442',
                bl_longitude: '109.095887',
                tr_longitude: '109.149359'
            },
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}