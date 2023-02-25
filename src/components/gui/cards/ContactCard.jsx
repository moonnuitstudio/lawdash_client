import React from 'react'

import {
    Box,
    CardContent,
    CardActions,
    IconButton,
    Typography,
    Divider
} from '@mui/material'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MailIcon from '@mui/icons-material/Mail';

const ContactCard = ({id, name, phonenumer, email}) => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden !important', width: '100%', background: 'white', borderRadius: '3px', boxShadow: '0px 0px 20px -10px rgba(0,0,0,0.5)' }}>
        <Box sx={{position: 'absolute', top: 0, left: 0, height: '100%', width: '3px', background: 'var(--light-2-color)'}} ></Box>
        <CardContent sx={{paddingBottom: '0px !important'}}>
            <Typography className='fnt-roboto' variant="h6" component="div">
                {name}
            </Typography>
            <Divider sx={{ marginBottom: '15px' }}/>
            <Box sx={{display: 'flex', gap: '10px', marginBottom: '10px'}}><LocalPhoneIcon /><Typography className='fnt-montserrat' variant="body2"> {phonenumer}</Typography></Box>
            <Box sx={{display: 'flex', gap: '10px'}}><MailIcon /><Typography className='fnt-montserrat' variant="body2"> {email}</Typography></Box>
        </CardContent>
        <CardActions disableSpacing sx={{ justifyContent: 'flex-end' }}>
            <IconButton className='btn-color-dark-2' aria-label="Edit Contact" component="label">
                <BorderColorIcon />
            </IconButton>
        </CardActions>
    </Box>
  )
}

export default ContactCard