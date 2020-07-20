const redux = require("redux");
const { reducer } = require("./appReducer");

test("User is initially not logged in", () => {
    const store = redux.createStore(reducer);
    expect(store.getState().user).toBe(null);
});

test("User can log in", () => {
    const store = redux.createStore(reducer);

    store.dispatch({
        type: "LOGIN",
        payload: {
            firstName: "Bla",
            lastName: "op 't Bla",
            age: 1234,
        },
    });

    expect(store.getState().user).toEqual({
        firstName: "Bla",
        lastName: "op 't Bla",
        age: 1234,
    });
});

//Lets add some more tests:
test("Logout works", () => {
    const store = redux.createStore(reducer);

    store.dispatch({
        type: "LOGIN",
        payload: {
            firstName: "Bla",
            lastName: "op 't Bla",
            age: 1234,
        },
    });

    store.dispatch({
        type: "LOGOUT",
    });

    expect(store.getState().user).toEqual(null);
});

test("Updating the logged in user works", () => {
    const store = redux.createStore(reducer);

    store.dispatch({
        type: "LOGIN",
        payload: {
            firstName: "Bla",
            lastName: "op 't Bla",
            age: 1234,
        },
    });

    store.dispatch({
        type: "UPDATE_LOGGEDIN_USER",
        payload: {
            age: 4321,
        },
    });

    expect(store.getState().user).toEqual({
        firstName: "Bla",
        lastName: "op 't Bla",
        age: 4321,
    });

    store.dispatch({
        type: "UPDATE_LOGGEDIN_USER",
        payload: {
            firstName: "A",
            lastName: "B",
        },
    });

    expect(store.getState().user).toEqual({
        firstName: "A",
        lastName: "B",
        age: 4321,
    });
});