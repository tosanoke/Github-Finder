import { useState, useContext, useReducer } from "react";
import GithubContext from "../../context/githubContext/GithubContext";
import { GithubReducers } from "../../context/githubContext/GithubReducers";
import AlertContext from '../../context/alert/AlertContext'

export const UserSearch = () => {
  const [inputText, setInputText] = useState("");
  const { users, userApiRequest, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputText === ""
      ? setAlert("Please enter someting", "error")
      : (userApiRequest(inputText), setInputText(""));
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={inputText}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
              onClick={() => clearUsers()}
            className="btn btn-ghost btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
