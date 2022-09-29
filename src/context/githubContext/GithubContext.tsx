import { createContext, useState } from "react";
import { RequestResponse, UserProps } from "../../types";
import { axiosPrivate } from "../../network/axios.config";

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

export const GithubProvider: React.FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const userApiRequest = async () => {
    const response: RequestResponse = await axiosPrivate.get(
      `${GITHUB_URL}/users`
    );
    setUsers(response.data);
    setIsLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, isLoading, userApiRequest }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
