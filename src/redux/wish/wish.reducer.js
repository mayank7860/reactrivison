
import {GOOD_MORNING,GOOD_NIGHT} from './Wish.action'
let initialstate={
    message:'hello,...'
}
let messageReducer = (state=initialstate ,action)=>{
switch(action.type){
    case GOOD_MORNING:
    return{
         message:'Good Morning.....'
    };
    case GOOD_NIGHT:
     return{
message:'Good Night.....sweet drms'
    };
    default:
        return state;
}
}

export {messageReducer};