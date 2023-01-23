import { 
    GOT_USER_PERMISSIONS, 
    DELETE_USER_PERMISSIONS
} from "../types/PermissionsType";

const initialState = {
    permissions: [],
    token: "",
}

export default function (state = initialState, action) {
    const { type } = action;

    switch (type) {
        case GOT_USER_PERMISSIONS:
            var { permissions, token } = action.payload

            return {
                ...state,
                permissions,
                token 
            }

        case DELETE_USER_PERMISSIONS:
            return {
                ...state,
                permissions: []
            }

        default:
            return state
    }
}