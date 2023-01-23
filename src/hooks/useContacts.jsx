import { useDispatch, useSelector } from 'react-redux'

import { 
    actionLoadAllContacts,
} from '../actions/ContactsAction'

const useContacts = () => {
    const dispatch = useDispatch()

    const { contacts } = useSelector(state => state.contacts)

    const loadAllContacts = () => dispatch(actionLoadAllContacts())

    return {
        contacts,
        loadAllContacts
    }
}

export default useContacts;