import qs from 'qs';
import axios from 'axios'

const CLIENT_ID = '15c9bdff07db45d';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
        //https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=token&state=APPLICATION_STATE
    },
    fetchImages(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    uploadImages(token, images) {
        const promises =  Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image); // take the file refernce and retrieve to send
            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        });

        return Promise.all(promises) // wait for all the calls to return a promise
        
    }
}