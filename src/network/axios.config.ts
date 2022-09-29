import axios, { AxiosRequestConfig } from 'axios';
import { RequestResponse, UserProps } from "../types";
 

export const axiosPrivate = axios.create({
    headers: {
        "Content-Type": "application/json"
    }
});

const GITHUB_URL = import.meta.env.VITE_API_URL;

axiosPrivate.interceptors.request.use(async(req: AxiosRequestConfig)=> {
   req.headers!.Authorization = `Bearer ${import.meta.env.VITE_API_TOKEN}`
    return req;
})

export const userApiRequest = async (text: string) => {
    const params = new URLSearchParams({
        q: text,
      })
    const response: RequestResponse = await axiosPrivate.get(
      `${GITHUB_URL}/search/users?${params}`
    );
    const data = response.data.items;
    return data;
  }