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

import UserCard from "../UserCard";
import { useMemo } from "react";

const RIGHTMENUWIDTH = 260

const RightMenu = () => {

  const { isAuthenticated, loginWithRedirect, logout, getAccessTokenSilently, user } = useAuth0()

  const [ nickname, avatarPicture, role ] = useMemo(() => {
    if (!user) return [ 'none' ]

    const { nickname, picture } = user
    const roles = user['https://my-app.example.com/roles']
    let role = "none"

    if (roles && roles.length > 0) role = roles[0].replace('_', ' ')
    
    return [ nickname, picture, role ]
  }, [user])

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
        <Box component="div" sx={{display: 'flex', flexDirection: 'column', height: "100%"}}>
          <UserCard nickname={nickname} picture={avatarPicture} role={role} />
          <Divider light sx={{borderColor: 'rgba(0,0,0,.2)', borderWidth: '1px', marginBottom: '10px'}} />
          <Box component="div" sx={{flexGrow: 1}}></Box>
          <Divider light sx={{borderColor: 'rgba(0,0,0,.2)', borderWidth: '1px', marginBottom: '10px'}} />
          <Button onClick={logout} variant="text" sx={{textTransform: 'capitalize'}} className="txt-dark-1 fnt-montserrat" startIcon={<LogoutIcon />}>Logout</Button>
        </Box>
      )}
    </Drawer>
  )
}

export default RightMenu

export { RIGHTMENUWIDTH }