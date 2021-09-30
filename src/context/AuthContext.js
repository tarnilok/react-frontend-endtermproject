import {createContext, useState, useEffect} from "react";
import { userObserver } from "../auth/firebase";
import { useFetch } from "../auth/firebase";


export const AuthContext = createContext();

function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState();
    const { cardList} = useFetch();

    useEffect(() => {
        userObserver(setCurrentUser)
    }, [])

    return(
        <AuthContext.Provider value={{currentUser, cardList}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;