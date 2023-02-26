import { useState } from 'react'
import { styled, useTheme } from "@mui/material/styles"

import {
    Box,
    Stack,
    BottomNavigation,
    BottomNavigationAction
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';

import useContacts from '../../../hooks/useContacts'

import ContactCard from '../cards/ContactCard'

const CostumeBottomNavigationAction = styled(BottomNavigationAction)(({theme}) => ({
    color: 'var(--light-1-color)',
    fontFamily: "'Montserrat', sans-serif !important",
    '&.Mui-selected': {
        color: 'white',
    }
}))

const ContactStack = () => {

    const { contacts } = useContacts()

    const [value, setValue] = useState(0);

    return (
        <>
            <Box sx={{ width: '100%', flexGrow: 1, overflowY: 'scroll', paddingBottom: '20px' }}>
                <Stack spacing={2}>
                    {contacts.map((contact, index) => {

                        const { id, firstname, lastname, email, dayphone } = contact

                        const data_email = email? email : 'None'
                        const data_dayphone = dayphone? dayphone : 'None'

                        return (<ContactCard id={id} name={`${firstname} ${lastname}`} email={data_email} phonenumer={data_dayphone} />)
                    })}
                </Stack>
            </Box>

            <Box className='fix-element-width-buttom-card' sx={{ width: '100%', height: '60px' }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    sx={{background: 'var(--dark-2-color)', height: '60px'}}
                >
                    <CostumeBottomNavigationAction label="Add Contact" icon={<AddIcon />} />
                    <CostumeBottomNavigationAction label="Filter Contacts" icon={<FilterListIcon />} />
                </BottomNavigation>
            </Box>
        </>
    )
}

export default ContactStack