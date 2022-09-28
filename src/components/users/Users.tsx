import axios from "axios";
import { useEffect } from "react";
import { axiosPrivate } from "../../network/axios.config";
import { RequestResponse } from "../../types";

export const Users = () => {
  const userApiRequest = async () => {
    const response: RequestResponse = await axiosPrivate.get(
      `${import.meta.env.VITE_API_URL}/users`);
      return response.data;
  };

  useEffect(() => {
    userApiRequest()
  }, []);

  return (
      <>
        Users
      </>
  );
};
