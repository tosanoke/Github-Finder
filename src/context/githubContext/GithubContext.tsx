import { createContext, useState, useReducer } from "react";
import { RequestResponse, UserProps } from "../../types";
import { axiosPrivate } from "../../network/axios.config";
import { GithubReducers } from './GithubReducers'

interface ContextProps {
  users: UserProps[];
  isLoading: boolean;
  userApiRequest: (text: string) =>void;
  clearUsers: () => void;
}

type Props = {
  children: React.ReactNode;
};

const GithubContext = createContext<ContextProps>({} as ContextProps);
const GITHUB_URL = import.meta.env.VITE_API_URL;

const initialState = {
    users: [],
    isLoading: false,
}

export const GithubProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(GithubReducers, initialState)
  const {users, isLoading} = state;


  const userApiRequest = async (text: string) => {
    dispatch({
      type: 'SET_LOADING',
      payload: []
    })
    const params = new URLSearchParams({
        q: text,
      })
    const response: RequestResponse = await axiosPrivate.get(
      `${GITHUB_URL}/search/users?${params}`
    );
    const data = response.data.items;
    dispatch({
      type: 'GET_USERS',
      payload: data
    })

  }

  const clearUsers = () => dispatch({
    type: 'CLEAR_USERS',
    payload: []
  })

  return (
    <GithubContext.Provider value={{ users, isLoading, userApiRequest, clearUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
