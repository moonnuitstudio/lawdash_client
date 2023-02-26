import {
    Grid,
    Typography
} from '@mui/material';

import ReactTextfield from '../../../components/inputs/ReactTextfield';

const ContactBasicInfo = ({id}) => {
  return (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography className='fnt-montserrat' fontWeight={300} sx={{fontSize: '14px', marginBottom: '8px'}}>UNIQUE IDENTIFIER: {id}</Typography>
            </Grid>
            <Grid item xs={4}>
                <ReactTextfield name="firstname" label="First Name"/>
            </Grid>
            <Grid item xs={4}>
                <ReactTextfield name="middlename" label="Middle Name"/>
            </Grid>
            <Grid item xs={4}>
                <ReactTextfield name="lastname" label="Last Name"/>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={6}>
                <ReactTextfield name="email" label="Email"/>
            </Grid>
            <Grid item xs={6}>
                <ReactTextfield name="dayphone" label="Phone Number"/>
            </Grid>
        </Grid> 
    </>
  )
}

export default ContactBasicInfo