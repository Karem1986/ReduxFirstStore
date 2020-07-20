//My reducer function-Albums
// albums_reducer.js
const initialState = [];

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_ALBUM": {
            // => Ask yourself: what is action.payload?
            return [
                ...state,
                action.payload
            ];
        }
        case "REMOVE_ALBUM": {
            // => Ask yourself: what is action.payload?
            return [
                ...state.filter(album => album.title !== action.payload)
                //the one we want to remove is already specified in the test
            ];
        }
        default: {
            return state;
        }
    }
}

module.exports = { reducer };