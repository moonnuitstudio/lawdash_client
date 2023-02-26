import { 
    Box, 
    Typography,
    CardContent,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material"

import useContacts from "../../../../hooks/useContacts"

import { useNavigate } from "react-router-dom"

const RecentContactCards = () => {

    const { contacts } = useContacts()
    const navigate = useNavigate()

  return (
    <Box sx={{ width: '100%', background: '#9A8C98', padding: '10px', borderRadius: '2px', boxShadow: '2px 2px 30px -15px rgba(0,0,0,0.75)' }}>
        <CardContent>
            <Typography sx={{color: 'white', textTransform: 'uppercase', fontSize: '15px'}} fontWeight={700} className="fnt-roboto" variant="h5" component="div">Recent Contacts</Typography>
            <Divider sx={{background: 'white', marginBottom: '10px'}} />
            <Box sx={{width: '100%'}}>
                <List>
                    {contacts.slice(0, 5).map(contact => {
                        const {id, firstname, lastname} = contact

                        return (
                        <ListItem key={id} disablePadding>
                            <ListItemButton onClick={_ => { navigate(`/contacts/${id}`);  console.log(`/contacts/${id}`)}}>
                                <ListItemText className="fnt-montserrat" sx={{color: 'white'}} primary={`${firstname} ${lastname}`} />
                            </ListItemButton>
                        </ListItem>)
                    })}
                </List>
            </Box>
        </CardContent>
    </Box>
  )
}

export default RecentContactCards