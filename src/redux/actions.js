export const ADD_EMP = "ADD_EMP";
export const DELETE_EMP = "DELETE_EMP";
export const EDIT_EMP = "EDIT_EMP";

let id=101

export function addEmp(emp) {
    return {
        type:ADD_EMP,
        payload: {name:emp,id:id++},
    }
}

export function deleteEmp(empId) {
    return {
        type:DELETE_EMP,
        payload: empId,
    }
}

export function editEmp(emp) {
    return {
        type:EDIT_EMP,
        payload: emp,
    }
}