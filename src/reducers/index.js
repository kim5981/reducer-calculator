import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION } from './../actions';

export const initialState = {
    total: 100,
    operation: "*",
    memory: 100
}

/**
 * addOne returns "add one"
 * applyNumber returns "apply num"
 * changeOperation returns "change operation"
 * addOne returns {
 * type: add one
 * }
 * applyNumber returns {
 * {type:APPLY_NUMBER, payload:number}
 * } // payload being the number that's input
 */

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

// would want to add a division 

// reducer is a fn that takes two params (a slice of state and the imported axn's)
const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
                //return an obj w everything in state and
                // total: that has (num 1 as state.total,
                // num 2 as action.payload,
                // operation as state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
            
        default:
            return state;
    }
}

export default reducer;