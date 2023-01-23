import { 
  Drawer,
  Button,
  Box,
  Divider
} from "@mui/material"

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const RIGHTMENUWIDTH = 260

const RightMenu = () => {

  const { isAuthenticated, loginWithRedirect, logout, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    
  });


  return (
    <Drawer sx={{
        width: RIGHTMENUWIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: RIGHTMENUWIDTH,
            boxSizing: 'border-box',
            visibility: 'visible !important',
            transform: 'none !important',
            background: 'transparent',
            border: 'none',
            padding: '12px'
        },
    }}
    variant="persistent"
    anchor="right"
    className="bg-white"
    >
      {!isAuthenticated? (
        <Button onClick={loginWithRedirect} disableElevation className="dark-2 fnt-montserrat" sx={{textTransform: 'capitalize'}} variant="contained" startIcon={<LoginIcon />}>Log In</Button>
      ) : (
        <Box component="div" fullWidth sx={{display: 'flex', flexDirection: 'column', height: "100%"}}>
          <Box component="div" sx={{flexGrow: 1}}></Box>
          <Divider light sx={{borderColor: 'rgba(0,0,0,.2)', borderWidth: '1px', marginBottom: '10px'}} />
          <Button fullWidth onClick={logout} variant="text" sx={{textTransform: 'capitalize'}} className="txt-dark-1 fnt-montserrat" startIcon={<LogoutIcon />}>Logout</Button>
        </Box>
      )}
    </Drawer>
  )
}

export default RightMenu

export { RIGHTMENUWIDTH }