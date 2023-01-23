import {
    Button
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';

import SaveIcon from '@mui/icons-material/Save';

const ModalButton = ({text, handleOpen, isOpen}) => {
  return isOpen? (
    <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
        >
        {text}
    </LoadingButton>
  ):(
    <Button onClick={handleOpen} variant="contained" className='dark-1 fnt-roboto' disableElevation>
        {text}
    </Button>
  )
}

export default ModalButton