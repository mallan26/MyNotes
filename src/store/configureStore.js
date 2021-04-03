import {createStore , combineReducers , applyMiddleware} from 'redux'
import userAuthReducer from '../reducers/user-Auth-Reducer'
import thunk from 'redux-thunk'
import userInfoReducers from '../reducers/user-Info-Reducers'
import notesReducers from '../reducers/notes-Reducer'

export default function configureStore(){
    //const userDetails  = JSON.parse(localStorage.getItem("userDetails"))
    const store = createStore(combineReducers({
        FormData : userAuthReducer,
        userINFO : userInfoReducers , 
        notes: notesReducers

    }),applyMiddleware(thunk))
    return store
}