export const APP_LOADED = "APP_LOADED";

export const handleAppLoaded = (app) => {
    console.log('appActions', app)
    return (dispatch) => {
        dispatch({
            type: APP_LOADED,
            payload: app.isLoaded
        });
    };
};