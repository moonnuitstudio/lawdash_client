import {
    LOAD_ALL_CONTACTS,
    ADD_NEW_CONTACTS,
    DELETE_CONTACTS
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
            var new_contacts = action.payload
            var contacts = state.contacts.concat(new_contacts)

            return {
                ...state,
                contacts
            }

        case DELETE_CONTACTS:
            var ids = action.payload
            var contacts = state.contacts.filter(x => !ids.includes(x.id))

            return {
                ...state,
                contacts
            }

        default:
            return state;
    }
}