import axios from 'axios';
import cookie from 'cookie-machine';
import constant from '../constants';
import createRestApiClient from '../utils/createRestApiClient';
import { getNotes } from './noteActions';
import { apiEndpoint } from '../utils/envConfig'

const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint
});

export function userSingUp(payload) {
    return dispatch => {
        dispatch(request({
            payload
        }));
        client.request({
                method: 'POST',
                url: '/signup',
                data: {
                    ...payload
                }
            })
            .then(function (response) {
                setAuthCookie('token', response.data.token);
                dispatch(success({
                    ...payload,
                    ...response.data
                }));
            })
            .catch(function (error) {});
    }

    function request(user) {
        return {
            type: constant.SIGN_UP_REQUEST,
            user
        }
    }

    function success(user) {
        return {
            type: constant.SIGN_UP_SUCCESS,
            user
        }
    }

    function failure(error) {
        return {
            type: constant.SIGN_UP_FAILURE,
            error
        }
    }
}



export function userLogin(payload) {
    return dispatch => {
        dispatch(request({
            payload
        }));
        client.request({
                method: 'POST',
                url: '/signin',
                data: {
                    ...payload
                }
            })
            .then(function (response) {
                setAuthCookie('token', response.data.token);
                dispatch(success({
                    ...payload,
                    ...response.data
                }));
                //dispatch(getNotes());
            })
            .catch(function (error) {});
    }

    function request(user) {
        return {
            type: constant.LOGIN_REQUEST,
            user
        }
    }

    function success(user) {
        return {
            type: constant.LOGIN_SUCCESS,
            user
        }
    }

    function failure(error) {
        return {
            type: constant.LOGIN_FAILURE,
            error
        }
    }
}

export function setAuthCookie(name, value) {
    cookie.set(name, value);
}