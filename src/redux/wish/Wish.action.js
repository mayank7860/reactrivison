//1st-create action type
const GOOD_MORNING='GOOD_MORNING';
const GOOD_NIGHT='GOOD_NIGHT'

//create action

let sayGMAction =()=>{
    return{
        type:GOOD_MORNING, 
    };
};
let sayGNAction =()=>{
    return{
        type:GOOD_NIGHT, 
    };
};
//export acttiontyoe and action
export {GOOD_MORNING, GOOD_NIGHT, sayGMAction, sayGNAction};