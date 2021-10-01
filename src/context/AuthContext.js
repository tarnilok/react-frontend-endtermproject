import {createContext, useState, useEffect} from "react";
import { userObserver } from "../auth/firebase";
import { useFetch } from "../auth/firebase";


export const AuthContext = createContext();

function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState();
    const [cardDetail, setCardDetail] = useState({})

    useEffect(() => {
        userObserver(setCurrentUser)
    }, [])

    const values = {
        currentUser,
        setCardDetail,
        cardDetail
    }
    return(
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;