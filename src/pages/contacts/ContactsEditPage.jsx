import { 
    Box,
    Grid,
    Typography,
    Button
} from "@mui/material"

import useContacts from "../../hooks/useContacts"

const ContactsEditPage = () => {

    const { selectedContact } = useContacts()

    const { firstname, lastname } = selectedContact

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
        <Typography className="fnt-montserrat" sx={{marginTop: '10px', marginBottom: '30px'}}>
            {`${firstname} ${lastname}`}'s Contact Information
        </Typography>
        <Grid container spacing={1} sx={{ flexGrow: 1}}>
            <Grid item xs={3} sx={{ padding: '0px' }}>
                <Button className="fnt-montserrat txt-dark-1" sx={{width: '100%', borderRadius: '0px'}} variant="text">Basic Information</Button>
            </Grid>
            <Grid item xs={9}>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <Box sx={{width: '100%', flexGrow: 1, background: '#f2f2f2', border: '1px solid rgba(0,0,0,.3)', padding: '20px', minHeight: '200px', borderRadius: '2px'}}>
                        Hola
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button variant="contained" className='dark-1 fnt-roboto' disableElevation>Save Changes</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ContactsEditPage