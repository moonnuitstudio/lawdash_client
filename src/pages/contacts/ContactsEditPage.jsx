import { 
    Box,
    Grid,
    Typography,
    Button
} from "@mui/material"

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useMemo } from "react"

import useContacts from "../../hooks/useContacts"

import ContactBasicInfo from "./forms/ContactBasicInfo"

const ContactsEditPage = () => {
    const navigate = useNavigate()

    const { selectedContact } = useContacts()

    const [ firstname, lastname, selectedId ] = useMemo(_ => {
        if (!selectedContact) return ["", ""]

        const { id, firstname, lastname } = selectedContact

        return [firstname, lastname, id]
    }, [selectedContact])

    useEffect(() => {
        if (!selectedContact) navigate('/contacts')
    }, [selectedContact])

    const methods = useForm({
        defaultValues: selectedContact,
        resetOptions: {
            keepDirtyValues: true,
            keepErrors: true,
        }
    });

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
            <Typography className="fnt-montserrat" sx={{marginTop: '10px', marginBottom: '30px'}}>
                {`${firstname} ${lastname}`}'s Contact Information
            </Typography>
            <Grid container spacing={0} sx={{ flexGrow: 1}}>
                <Grid item xs={3} sx={{ padding: '0px' }}>
                    <Button className="fnt-montserrat txt-dark-1 opacity-5 active" sx={{width: '100%', borderRadius: '0px'}} variant="text">Basic Information</Button>
                </Grid>
                <Grid item xs={9}>
                    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                        <Box sx={{width: '100%', flexGrow: 1, border: '1px solid rgba(0,0,0,.3)', padding: '20px', minHeight: '200px', borderRadius: '2px'}}>
                            <FormProvider {...methods} >
                                <ContactBasicInfo id={selectedId}/>
                            </FormProvider>
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