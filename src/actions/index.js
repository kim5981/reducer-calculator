export const ADD_ONE = "ADD_ONE";
// variable that returns string "add one"

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
// more variables that return strings 

export const addOne = () => {
    return({type:ADD_ONE});
}
// a function that returns an object 
// key called type
// value that returns string "add one"
// type: "add one"

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
// a function that takes in a number
// returns an object
// with two items
//1: key: type, value: "apply number"
//2: key: payload, value: number (the input number from fn)