import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';

import useContacts from '../hooks/useContacts'

import {
  Grid,
  Stack
} from '@mui/material'

import NewContactModal from '../components/modals/NewContactModal'
import ModalButton from '../components/gui/modals/ModalButton'

import ContactsTable from '../components/gui/tables/ContactsTable'
import ContactStack from '../components/gui/stacks/ContactStack';

const ContactsPage = () => {

  const {loadAllContacts} = useContacts()
  const [isMobileOrTable] = useOutletContext()

  const [showAddContactModal, setShowAddContactModal] = useState(false)

  const handleOpenAddContactModal = _ => setShowAddContactModal(true)
  const handleCloseAddContactModal = _ => setShowAddContactModal(false)

  useEffect(() => {
    loadAllContacts()
  }, [])

  if (isMobileOrTable) return (<ContactStack />)

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