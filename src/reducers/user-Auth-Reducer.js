const formInitaialValue = []

export default function userAuthReducer(state = formInitaialValue , action){
     switch(action.type){
          case "POST_DATA" : {
               return [...state ,{...action.payload}]
          }
          
          default :{
               return [...state]
          }
     }
}