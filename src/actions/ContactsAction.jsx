import { 
    LOAD_ALL_CONTACTS,
} from "../types/ContactsTypes";

export const actionLoadAllContacts = () => {
    return async (dispatch) => {
        const data = [
            {
                id: 1,
                firstname: 'Alexander',
                lastname: 'Guardado',
                phonenumber: '',
                email: 'alexander@zaralaw.com',
                currentaddress: {
                    street: '3306 del monte blvd',
                    apt: 'apt 1',
                    city: 'Marina',
                    state: 'California',
                    zipcode: '93901'
                }
            }
        ]

        dispatch(successLoadAllAction(data)) 
    }
}

const successLoadAllAction = data => ({
    type: LOAD_ALL_CONTACTS,
    payload: data
})

const loadError = () => ({
    type: 'ERRR'
})
