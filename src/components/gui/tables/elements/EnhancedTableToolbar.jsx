import { 
    Toolbar,
    Typography
} from "@mui/material"

import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';

const EnhancedTableToolbar = ({ numSelected }) => {
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
            <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
            >
            {numSelected} Contacts Selected
            </Typography>
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