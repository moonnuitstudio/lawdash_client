import { 
    Box, 
    Typography,
    CardContent,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    CardActions,
    IconButton
} from "@mui/material"
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import useContacts from "../../../../hooks/useContacts"

import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react";

import phone_book from '../../../../assets/img/phone_book.png'

const btnLinkStyle = {
    cursor: 'pointer',
    color: '#4A4E69',
}

const RecentContactCards = () => {

    const { contacts } = useContacts()
    const navigate = useNavigate()

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '300px', background: '#f2f2f2', padding: '10px', borderRadius: '2px', border: '1px solid rgba(0,0,0,.2)', zIndex: 10 }}>
            <CardContent sx={{paddingBottom: '0px', flexGrow: 1}}>
                <img src={phone_book} width="50px" style={{ float: 'right' }} />
                <Typography sx={{color: 'black', textTransform: 'uppercase', fontSize: '15px'}} fontWeight={700} className="fnt-roboto" variant="h5" component="div">Recent Contacts</Typography>
                <Divider width="20%" sx={{background: '#4A4E69', marginBottom: '10px', height: '3px'}} />
                <Box sx={{width: '100%'}}>
                    
                        {contacts.slice(0, 5).map(contact => {
                            const {id, firstname, lastname} = contact

                            return (
                                <p><a className="fnt-montserrat color-2-hover underline-hover" style={btnLinkStyle} onMouseDown={_ => navigate(`/contacts/${id}`)}>{`${firstname} ${lastname}`}</a></p>
                            )
                        })}
                    
                </Box>
            </CardContent>
            <CardActions sx={{borderTop: '1px solid rgba(0,0,0,0.2)', paddingBottom: '0px'}} disableSpacing>
                <IconButton onMouseDown={_ => navigate(`/contacts`)} aria-label="add to favorites">
                    <ContactPhoneIcon />
                </IconButton>
            </CardActions>
        </Box>
    )
}

export default RecentContactCards