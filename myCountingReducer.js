//Pure function: 

// myCountingReducer.js
const initialState = 0;

function myCountingReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD": {
            return state + action.payload;
        }
        default: {
            return state;
        }
    }
}

module.exports = myCountingReducer;

//1. What will be console logged?
// console.log(myCountingReducer(undefined, {}));
//Prediction: as the first parameter passed is undefined, it will fallback
//into the initial state which is O. [correct]
// console.log(myCountingReducer(0, { type: "ADD", payload: 5 }));
//Prediction: 5 [correct]
// console.log(myCountingReducer(35, { type: "ADD", payload: 10 }));
//Prediction: 20 [correct]
