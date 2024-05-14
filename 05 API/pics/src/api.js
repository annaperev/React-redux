import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID HYV8Bv8cUgbavqMIA1Dn8NQN8FiYQkb5qRObq1EiAr8'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages;
