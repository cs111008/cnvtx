import constant from '../constants'
const initialState = {
    user: {}
}


export default function userReducer(currentState, {
    type,
    payload
}) {
    const state = currentState || initialState;
    switch (type) {


        case constant.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: payload
            });

        case constant.LOGIN_FAILURE:
            return Object.assign({}, state, {
                allCountries: payload
            });

        case constant.SIGN_UP_SUCCESS:
            return Object.assign({}, state, {
                user: payload
            });
        default:
            return state;
    }
}