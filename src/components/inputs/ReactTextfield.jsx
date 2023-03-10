import { useFormContext } from "react-hook-form";
import { useMemo } from "react";

import { 
    TextField,
} from "@mui/material"

const ReactTextfield = ({name, label}) => {
    const { register, formState: { errors } } = useFormContext();

    const hasError = useMemo(() => errors && !!errors[name], [errors])

    const errMessage = useMemo(() => hasError && errors[name].message.replace(name, label), [hasError])

    return (
        <TextField sx={{width: '100%'}} error={hasError} helperText={errMessage} label={label} variant="outlined" {...register(name)} />
    )
}

export default ReactTextfield