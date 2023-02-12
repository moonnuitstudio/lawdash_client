import {
    LOAD_ALL_CONTACTS,
    ADD_NEW_CONTACTS
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

        case ADD_NEW_CONTACTS:
            let new_contacts = action.payload;
            let contacts = state.contacts.concat(new_contacts)

            return {
                ...state,
                contacts
            }

        default:
            return state;
    }
}