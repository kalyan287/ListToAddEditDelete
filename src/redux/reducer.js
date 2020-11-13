
import {ADD_EMP,DELETE_EMP,EDIT_EMP} from './actions';
import {emps} from './states';

export let reducer = (state = emps, action) => {
    let newEmps;
    switch (action.type) {
        case ADD_EMP:
            newEmps = [...state];
            newEmps.push(action.payload);
            return newEmps;

        case DELETE_EMP:
            newEmps = [...state];
            newEmps = newEmps.filter(emp => emp.id !== action.payload)
            return newEmps;

        case EDIT_EMP:
            newEmps = [...state];
            let index = 0;
            for(let index=0;index<newEmps.length;index++){
                if(newEmps[index].id === action.payload.id){
                    break;
                }  
            }
            newEmps[index] = action.payload
            return newEmps;

        default:   
            return state; 
    }
}