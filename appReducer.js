//REDUCER THAT CONTAINS AN OBJECT 
// appReducer.js
const initialState = {
    user: null,
    darkMode: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOGOUT": {
            return {
                ...state,
                user: null,
            };
        }
        case "TOGGLE_DARK_MODE": {
            return {
                ...state, //copy the whole state and changed that mode to true
                darkMode: true, //boolean 
            };
        }
        case "LOGIN": {
            // => Ask yourself: what is action.payload?
            return {
                ...state,
                user: action.payload,
            };
        }
        case "UPDATE_LOGGEDIN_USER": {
            // => Ask yourself: what is action.payload?
            if (!state.user) {
                // Not currently logged in,
                //  so this doesn't make sense
                return state;
            }
            return {
                ...state,
                user: {
                    // Copy over all current user info,
                    ...state.user,
                    // and then add updates
                    ...action.payload,
                },
            };
        }
        default: {
            return state;
        }
    }
}

module.exports = { reducer };