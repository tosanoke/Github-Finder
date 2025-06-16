import { useContext } from "react";
import GithubContext from "../../context/githubContext/GithubContext";
import { Spinner } from "../layout/Spinner";
import { UserItem } from "./UserItem";

export const Users = () => {
  const { users, isLoading } = useContext(GithubContext);

  return (
    <>
      {!isLoading ? (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <>
              <UserItem key={user.id} user={user} />
            </>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
