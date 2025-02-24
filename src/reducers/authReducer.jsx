export const authReducer = async (state, action) => {
    switch(action.type){
        case 'LOGIN_START':
            return {...state, loading: true, error: null}
        case 'LOGIN_SUCCESS':
            console.log('succes',action.payload)
            return {...state, loading: false, user: action.payload.user, token: action.payload.token}
        case 'LOGIN_ERROR':
            console.log('login_error')
            return {loading: false, user: null,token:null, error: 'Email no encontrado'}
        case 'LOGOUT':
            return {...state, error: null, user: null, token: null}

        default:
            return state
    }
}