
interface IState {
   msg: string,
   type: string
}

interface IAction {
    type: string
    payload?: IState
}


const alertReducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
      case 'SET_ALERT':
        return action.payload!
      case 'REMOVE_ALERT':
        return {msg: "",
            type: ""}
      default:
        return state
    }
  }
  
  export default alertReducer