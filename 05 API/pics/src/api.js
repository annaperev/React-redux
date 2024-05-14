import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID HYV8Bv8cUgbavqMIA1Dn8NQN8FiYQkb5qRObq1EiAr8'
        },
        params: {
            query: 'cats'
        }
    });

    console.log('response', response);
    return response;
}

export default searchImages;
