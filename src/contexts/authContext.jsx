import { createContext, useEffect, useReducer } from "react";
import axios from 'axios'
import { authReducer } from "../reducers/authReducer";

const INITIAL_STATE = { user:null, loading:false, error:null }

export const AuthContext = createContext()


export const AuthProvider = ({children})  => {
    const [state, dispatch] = useReducer(authReducer,  INITIAL_STATE, (initial)=>{
         
         const usersStored = localStorage.getItem('auth')
         try{
            const parsed = JSON.parse(usersStored)
            return parsed? parsed: initial
         }catch(err){
            return initial
         }
         
    })
    



    useEffect(()=>{
        console.log(state)
        localStorage.setItem('auth', JSON.stringify(state))
    }, [state])


    async function login(email, password){
        dispatch({type: 'LOGIN_START'})
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
                "email": email,
                "clave": password
            })

            dispatch({type: 'LOGIN_SUCCESS', payload: {user:data.user, token: data.token}})
        } catch (error) {
            console.log('error',error)
            dispatch({type: 'LOGIN_ERROR', payload: error.response.data.msg})
           
        }
    }

    function logout(){
        dispatch({type: 'LOGOUT'})
    }

    return(
        <AuthContext.Provider
            value={{...state, login, logout}}>
                {children}
        </AuthContext.Provider>
    )
}

