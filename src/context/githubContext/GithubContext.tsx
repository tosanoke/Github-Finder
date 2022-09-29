import { createContext, useState, useReducer } from "react";
import { RequestResponse, UserProps } from "../../types";
import { axiosPrivate } from "../../network/axios.config";
import { GithubReducers } from './GithubReducers'

interface ContextProps {
  users: UserProps[];
  isLoading: boolean;
  userApiRequest: () => void;
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

  const userApiRequest = async () => {
    dispatch({
      type: 'SET_LOADING',
      payload: []
    })
    const response: RequestResponse = await axiosPrivate.get(
      `${GITHUB_URL}/users`
    );
    const data = response.data;
    dispatch({
      type: 'GET_USERS',
      payload: data
    })
  };

  return (
    <GithubContext.Provider value={{ users, isLoading, userApiRequest }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
