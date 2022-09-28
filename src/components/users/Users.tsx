import { useEffect, useState } from "react";
import { axiosPrivate } from "../../network/axios.config";
import { RequestResponse } from "../../types";

export const Users = () => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const userApiRequest = async () => {
    const response: RequestResponse = await axiosPrivate.get(
      `${import.meta.env.VITE_API_URL}/users`);
      setUsers(response.data);
      setIsLoading(false)
  };
 
  useEffect(() => {
    userApiRequest()
  }, []);

  return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2" >
        Users
      </div>
  );
};
