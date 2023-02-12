import { 
    GOT_USER_PERMISSIONS, 
    DELETE_USER_PERMISSIONS
} from "../types/PermissionsType";

export const actionSetPermissions = (permissions, token) => {
    return async dispatch => {

        //localStorage.setItem('lawdash_token', token)

        dispatch({
            type: GOT_USER_PERMISSIONS,
            payload: {
                permissions,
                token
            }
        })
    }
}

export const actionResetPermissions = () => {
    return async dispatch => {
        dispatch({
            type: DELETE_USER_PERMISSIONS,
        })
    }
}