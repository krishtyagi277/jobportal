import { SET_USER } from "./Actiontype";

const reducer = (state, action) => {
    switch (action.type) {
        case SET_USER:
            console.log(action.payload)
            const userObj = {
                isAuth: action.payload?true: false,
                userData:action.payload
            }
        return {...state, ...userObj}
    
        default:
            return state;
    }
}

export default reducer;