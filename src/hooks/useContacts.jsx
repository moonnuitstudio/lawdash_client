import { useDispatch, useSelector } from 'react-redux'

import usePermissions from './usePermissions'

import { 
    actionLoadAllContacts,
    actionAddNewContact
} from '../actions/ContactsAction'

const useContacts = () => {
    const dispatch = useDispatch()
    const { autorizationHeader } = usePermissions()

    const { contacts } = useSelector(state => state.contacts)

    const loadAllContacts = () => dispatch(actionLoadAllContacts(autorizationHeader))

    const addNewContact = (data) => dispatch(actionAddNewContact(autorizationHeader, data))

    return {
        contacts,
        loadAllContacts,
        addNewContact
    }
}

export default useContacts;