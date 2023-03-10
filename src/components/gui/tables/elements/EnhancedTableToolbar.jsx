import { 
    Toolbar,
    Typography,
    Box,
    IconButton 
} from "@mui/material"

import DeleteIcon from '@mui/icons-material/Delete';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';

import useToastify from "../../../../hooks/useToastify";
import useContacts from "../../../../hooks/useContacts";

const EnhancedTableToolbar = ({ numSelected, ids, reset, onDelete }) => {

    const justOneItemSelected = numSelected == 1;

    const prepareDeleteAction = () => onDelete(reset, numSelected, ids)

  return (
    <Toolbar
    sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
    }}
    >
        {numSelected > 0 ? (
            <>
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                    >
                    {numSelected} Contact{justOneItemSelected? '' : 's'} Selected
                </Typography>
                <Box sx={{marginRight: '20px'}}>
                    <IconButton color="primary" aria-label="Delete contacs" component="span" onClick={prepareDeleteAction}>
                        { justOneItemSelected? <DeleteIcon /> : <DeleteSweepIcon /> }
                    </IconButton> 
                </Box>
            </>
        ) : (
            <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
            >
            Contact List
            </Typography>
        )}
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default EnhancedTableToolbar