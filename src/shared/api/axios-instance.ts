import axios from 'axios';

import { BASE_URL } from '../lib';

export const instance = axios.create({
    baseURL: BASE_URL,
});
