import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}){
    const {user} = useContext(AuthContext)

    if(user){
        return (children)
    }
    else{
        return(
            <Navigate to="/login"></Navigate>
        )
    }
}