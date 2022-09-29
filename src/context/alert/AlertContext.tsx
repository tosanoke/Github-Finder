import {createContext, useReducer} from 'react';
import alertReducer from './AlertReducers'


type Props = {
  children: React.ReactNode;
};

interface ContextProps {
  alert: {};
  setAlert: (msg: string, type: string) => void ;
}


const AlertContext = createContext<ContextProps>({} as ContextProps)



export const AlertProvider: React.FC<Props> = ({ children }) => {
    const initialState = {
      msg: "",
      type: ""
   }
  
    const [state, dispatch] = useReducer(alertReducer, initialState)
  
    // Set an alert
    const setAlert = (msg: string, type: string) => {
      dispatch({
        type: 'SET_ALERT',
        payload: { msg, type },
      })
  
      setTimeout(() => dispatch({ type: 'REMOVE_ALERT'}), 3000)
    }
  
    return (
      <AlertContext.Provider value={{ alert: state, setAlert }}>
        {children}
      </AlertContext.Provider>
    )
  }
  
  export default AlertContext