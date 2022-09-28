import axios, { AxiosRequestConfig } from 'axios';

export const axiosPrivate = axios.create({
    headers: {
        "Content-Type": "application/json"
    }
});

axiosPrivate.interceptors.request.use(async(req: AxiosRequestConfig)=> {
   req.headers!.Authorization = `Bearer ${import.meta.env.VITE_API_TOKEN}`
    return req;
})