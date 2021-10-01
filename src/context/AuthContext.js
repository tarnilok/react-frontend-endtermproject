import {createContext, useState, useEffect} from "react";
import { userObserver } from "../auth/firebase";
import { useFetch } from "../auth/firebase";
// import Main from "../pages/Main";

export const AuthContext = createContext();

function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState();
    const [cardDetail, setCardDetail] = useState({})
    const { cardList} = useFetch();

    useEffect(() => {
        userObserver(setCurrentUser)
    }, [])

    return(
        <AuthContext.Provider value={{currentUser, cardList,setCardDetail,cardDetail}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;