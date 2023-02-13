import { useEffect } from "react"
import useContacts from "../../../hooks/useContacts"

import BaseTable from './elements/BaseTable'

import notfound_img from '../../../assets/img/no_contacts.png'

import { 
  Typography,
} from "@mui/material"

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
      id: 'dayphone',
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

const imagestyle = {
  width: '200px'
}

const ContactsTable = () => {

    const { contacts } = useContacts()

    const nose = (<>
      <img src={notfound_img} style={imagestyle}/>
      <Typography className="fnt-roboto" variant="h6" component="p" sx={{ marginTop: '10px', fontWeight: '900', fontSize: '18px', textTransform: 'uppercase' }}>What are you waiting for?</Typography>
      <Typography className="fnt-montserrat" variant="body1" component="p" sx={{ marginTop: '-5px', fontSize: '15px', textTransform: 'uppercase' }}>expand your horizons!</Typography>
    </>)

    return (
      <BaseTable rows={contacts} headCells={headCells} notfound={nose} />
    )
}

export default ContactsTable