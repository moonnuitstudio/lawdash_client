import { 
    LOAD_ALL_CONTACTS,
    ADD_NEW_CONTACTS
} from "../types/ContactsTypes";

import axiosClient from "../helper/AxiosClient";
import useToastify from "../hooks/useToastify";

const { showMessageToast, showErrToast } = useToastify()

export const actionLoadAllContacts = (autorizationHeader) => {
    return async (dispatch) => {

        const { data } = await axiosClient.get('/contacts', autorizationHeader)
        const { contacts } = data;

        dispatch(successLoadAllAction(contacts)) 
    }
}

export const actionAddNewContact = (autorizationHeader, _data) => {
    return async (dispatch) => {
        
        const { data } = await axiosClient.post('/contacts', _data, autorizationHeader)

        const { success, contacts } = data;

        if (success) { 
            dispatch(successAddNewContactAction(contacts))
            showMessageToast('New contact added successfuly!')
        } else showErrToast('ERROR!')
    }
}

const successLoadAllAction = data => ({
    type: LOAD_ALL_CONTACTS,
    payload: data
})

const successAddNewContactAction = data => ({
    type: ADD_NEW_CONTACTS,
    payload: data
})

const loadError = () => ({
    type: 'ERRR'
})
