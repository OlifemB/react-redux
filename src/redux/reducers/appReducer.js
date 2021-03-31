import {
    APP_LOADED,
} from "@actions/appActions";

const initialState = {
    isLoaded: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_LOADED:
            return {...state, isLoaded: !action.payload };
        default:
            return state;
    }
};