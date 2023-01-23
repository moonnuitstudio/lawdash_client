import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { newContactchema } from "../../schemas";

import { 
    Grid,
    MenuItem,
    TextField,
    Button,
    ButtonGroup,
    Divider
} from "@mui/material"

import ReactHookFormSelect from "../inputs/ReactHookFormSelect";
import ReactTextfield from "../inputs/ReactTextfield";

const NewContactForms = ({onSubmit, onCancel}) => {

    const methods = useForm({
        resolver: yupResolver(newContactchema),
        defaultValues: {
            phonearea: `+1`,
        },
        resetOptions: {
            keepDirtyValues: true,
            keepErrors: true,
        }
    });

    return (
        <FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Grid container rowSpacing={3} columnSpacing={2}>
                    <Grid item xs={6}>
                        <ReactTextfield name="firstname" label="First Name"/>
                    </Grid>
                    <Grid item xs={6}>
                        <ReactTextfield name="lastname" label="Last Name"/>
                    </Grid>
                    <Grid item xs={12}>
                        <ReactTextfield name="email" label="Email"/>
                    </Grid>
                    <Grid item xs={2}>
                        <ReactHookFormSelect
                            id="phonearea"
                            name="phonearea"
                            className=""
                            variant="outlined"
                            fullWidth
                            >
                            <MenuItem value="+1">+1</MenuItem>
                            <MenuItem value="+52">+52</MenuItem>
                            <MenuItem value="+503">+503</MenuItem>
                        </ReactHookFormSelect>
                    </Grid>
                    <Grid item xs={10}>
                        <ReactTextfield name="phonenumber" label="Phone Number"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{borderColor: 'rgba(0,0,0,.2)', borderWidth: '1px'}} />
                    </Grid>
                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                        <ButtonGroup disableElevation>
                            <Button onClick={onCancel} variant="outlined" color="error">Cancel</Button>
                            <Button variant="contained" type="submit" className="fnt-roboto dark-2">Save Contact</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    )
}

export default NewContactForms