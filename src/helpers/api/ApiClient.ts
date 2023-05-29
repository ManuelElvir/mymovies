import axios from 'axios';


// default
axios.defaults.baseURL = process.env?.API_URL;

// content type
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

axios.defaults.headers.post['Authorization'] = 'bearer ' + process.env?.THE_MOVIE_DATABASE_SECRET;


class APIClient {

    /**
     * Set the default contentType
     */
    setContentType = (contentType: string) => {
        axios.defaults.headers.post['Content-Type'] = contentType;
        axios.defaults.headers.post['accept'] = contentType;
    }

    /**
     * Fetches data from given url
     */
    get = (url: string, params: any) => {
       
        return axios.get(url, params)
    }

    /**
     * post given data to url
     */
    create = (url: string, data: any) => {
        
        return axios.post(url, data);
    }

    /**
     * Updates data
     */
    update = (url: string, data: any) => {
       
        return axios.patch(url, data);
    }

    /**
     * Delete
     */
    delete = (url: string) => {
       
        return axios.put(url);
    }
}

export default APIClient;