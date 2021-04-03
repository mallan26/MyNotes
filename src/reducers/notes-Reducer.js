const notesInitialvalue = []

export default function notesReducers( state = notesInitialvalue , action ){

    switch(action.type){
        case "GET_NOTES" :{
            return [...state, ...action.payload]
        }
         
        case "ADD_NOTES" : {
            return [...state , {...action.payload}]
        }

        case "REMOVE" :{
            return state.filter(ele=>ele._id !== action.payload)
        }
        case "EDIT" : {
            return state.map(ele =>{
                if(ele._id === action.payload._id){
                    return {...ele , ...action.payload}
                } else {
                    return {...ele}
                }
            })
        }

        default : {
            return [...state]
        }
    }
}