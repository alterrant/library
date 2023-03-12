import {AxiosError, AxiosRequestHeaders, InternalAxiosRequestConfig} from 'axios';

import {axiosInstance} from '.';
import {TOKEN} from '../lib';

const onRequest = (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(TOKEN);

    if (token) {
        return {
            ...config,
            headers: {
                ...config.headers,
                "Authorization": `Bearer ${token}`,
            } as unknown as AxiosRequestHeaders,
        };
    }

    return config;
};

export const onRequestError = (error: AxiosError) => error;

axiosInstance.interceptors.request.use(onRequest, onRequestError);
