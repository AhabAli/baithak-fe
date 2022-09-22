import Axios from 'axios';

export const instance = Axios.create({
    baseURL: 'https://6ab7-59-103-209-214.in.ngrok.io'
});

