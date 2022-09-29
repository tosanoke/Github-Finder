import { UserProps } from "../../types";

interface IAction {
    type: string
    payload: UserProps[]
}

interface IState {
    users: UserProps[],
    isLoading: boolean,
}

export const GithubReducers = (state: IState, { type, payload }: IAction) => {
        switch (type) {
            case 'GET_USERS':
                return { ...state, users: payload, isLoading: false};
            case 'SET_LOADING':
                return { ...state, isLoading: true}
            default:
                return state;
        }
}
