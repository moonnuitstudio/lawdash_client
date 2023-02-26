import { useDispatch, useSelector } from 'react-redux'

import usePermissions from './usePermissions'

import { 
    actionLoadAllContacts,
    actionAddNewContact,
    actionDeleteContacts,
    actionSetSelectedContact
} from '../actions/ContactsAction'

const useContacts = () => {
    const dispatch = useDispatch()
    const { autorizationHeader } = usePermissions()

    const { contacts, selected } = useSelector(state => state.contacts)

    const loadAllContacts = () => dispatch(actionLoadAllContacts(autorizationHeader))

    const addNewContact = (data) => dispatch(actionAddNewContact(autorizationHeader, data))

    const deleteContacts = (ids) => dispatch(actionDeleteContacts(autorizationHeader, ids))

    const selectAContact = (id) => dispatch(actionSetSelectedContact(id))

    return {
        contacts,
        selectedContact: selected,
        loadAllContacts,
        addNewContact,
        deleteContacts,
        selectAContact
    }
}

export default useContacts;