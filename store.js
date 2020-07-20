// store.js
//In this snippet, we told Redux to make a store from the reducer.
// This store will now manage its own state internally. 
const { createStore } = require("redux");
const reducer = require("./myCountingReducer");

const store = createStore(reducer);
// console.log("Initial state of the store:", store.getState());
//We can't update the state directly, but instead:
//to get the current state of the store:
// store.getState() //store.getState() gives 20 as current state. 
//to get updates every tume the store's state has changed we use a callback listener function:
store.subscribe(() => {
    console.log("the state just changed to:", store.getState());
});

// If we want to update the store's state,
// we have to dispatch an action, for example:
// store.dispatch({
//     type: "ADD",
//     payload: 10,
// });

// //EXERCISE:
// store.dispatch({
//     type: "SUBSTRACT",
//     payload: 10,
// });

store.dispatch({
    type: "SUBTRACT",
    payload: 10,
});

console.log("final state:", store.getState());