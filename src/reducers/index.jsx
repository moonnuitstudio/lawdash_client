import { combineReducers } from "redux"
import ContactsReducer from "./ContactsReducer"
import LoadScreenReducer from "./LoadScreenReducer"
import PermissionsReducer from "./PermissionsReducer"

export default combineReducers({
    contacts: ContactsReducer,
    loadscreen: LoadScreenReducer,
    permissions: PermissionsReducer
})