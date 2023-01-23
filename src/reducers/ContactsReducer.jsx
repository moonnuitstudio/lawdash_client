import {
    LOAD_ALL_CONTACTS
} from '../types/ContactsTypes'

const initialState = {
    contacts: []
}

export default function(state = initialState, action) {
    const {type} = action;

    switch (type) {
        case LOAD_ALL_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }

        default:
            return state;
    }
}