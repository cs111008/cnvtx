import axios from 'axios';
import cookie from 'cookie-machine';
import constant from '../constants';
import createRestApiClient from '../utils/createRestApiClient';
import {
    apiEndpoint
} from '../utils/envConfig'

const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint
});




export function getNotes() {
    return dispatch => {
        client.request({
            method: 'GET',
            url: '/notes',
            headers: {'Authorization': cookie.get('token')}
        })
        .then(function (response) {
            //TODO:- Set the notes
        })
        .catch(function (error) {});
   }

    function request() {
        return {
            type: constant.NOTE_REQUEST
        }
    }

    function success(notes) {
        return {
            type: constant.NOTE_SUCCESS,
            payload: notes
        }
    }

    function failure(error) {
        return {
            type: constant.NOTE_FAILURE,
            error
        }
    }
}
