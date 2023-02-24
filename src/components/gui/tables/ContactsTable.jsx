import { useEffect } from "react"

import useContacts from "../../../hooks/useContacts"
import useToastify from "../../../hooks/useToastify"

import BaseTable from './elements/BaseTable'

import notfound_img from '../../../assets/img/no_contacts.png'
import DeleteIcon from '@mui/icons-material/Delete';

import swal from 'sweetalert';

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

    const { contacts, deleteContacts } = useContacts()
    const { showMessageToast } = useToastify()

    const actionDeleteContacts = (reset, length, ids) => {
      swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover ${length == 1? 'this contact' : 'those contacts' }!`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                deleteContacts(ids)
                reset()
            } 
      });
    }

    const optionsList = [
      {
        icon: <DeleteIcon />,
        text: 'Delete Contact',
        action: (data) => {
          const {id, firstname, lastname} = data

          swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover ${firstname} ${lastname}'s contact!`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                deleteContacts([id])
            } 
      });
          
        }
      }
    ]

    const nose = (<>
      <img src={notfound_img} style={imagestyle}/>
      <Typography className="fnt-roboto" variant="h6" component="p" sx={{ marginTop: '10px', fontWeight: '900', fontSize: '18px', textTransform: 'uppercase' }}>What are you waiting for?</Typography>
      <Typography className="fnt-montserrat" variant="body1" component="p" sx={{ marginTop: '-5px', fontSize: '15px', textTransform: 'uppercase' }}>expand your horizons!</Typography>
    </>)

    return (
      <BaseTable rows={contacts} headCells={headCells} notfound={nose} contextOption={optionsList} onDelete={actionDeleteContacts} />
    )
}

export default ContactsTable