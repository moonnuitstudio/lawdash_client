import { useEffect } from "react"
import useContacts from "../../../hooks/useContacts"

import BaseTable from './elements/BaseTable'

const headCells = [
    {
      id: 'firstname',
      numeric: false,
      disablePadding: false,
      label: 'First Name',
    },
    {
      id: 'lastname',
      numeric: false,
      disablePadding: false,
      label: 'Last Name',
    },
    {
      id: 'phonenumber',
      numeric: false,
      disablePadding: false,
      label: 'Phone Number',
    },
    {
      id: 'email',
      numeric: false,
      disablePadding: false,
      label: 'Email',
    }
];

const ContactsTable = () => {

    const { contacts } = useContacts()

  return (
    <BaseTable rows={contacts} headCells={headCells} />
  )
}

export default ContactsTable