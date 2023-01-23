import { useState, useEffect } from 'react'
import useContacts from '../hooks/useContacts'

import {
  Grid,
} from '@mui/material'

import NewContactModal from '../components/modals/NewContactModal'
import ModalButton from '../components/gui/modals/ModalButton'

import ContactsTable from '../components/gui/tables/ContactsTable'

const ContactsPage = () => {

  const {loadAllContacts} = useContacts()

  const [showAddContactModal, setShowAddContactModal] = useState(false)

  const handleOpenAddContactModal = _ => setShowAddContactModal(true)
  const handleCloseAddContactModal = _ => setShowAddContactModal(false)

  useEffect(() => {
    loadAllContacts()
  }, [])

  return (
    <>
      <Grid container direction="row" justifyContent="flex-end" spacing={2}>
        <Grid item xs={10}></Grid>
        <Grid item xs={2} sx={{display:'flex', justifyContent:'flex-end'}}>
          <ModalButton handleOpen={handleOpenAddContactModal} isOpen={showAddContactModal} text="Add Contact" />
        </Grid>
        <Grid item xs={12}>
          <ContactsTable />
        </Grid>
      </Grid>

      <NewContactModal isOpen={showAddContactModal} handleClose={handleCloseAddContactModal} />
    </>
  )
}

export default ContactsPage