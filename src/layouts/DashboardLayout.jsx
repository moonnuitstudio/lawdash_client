import { Outlet } from "react-router-dom"

import { styled, useTheme } from "@mui/material/styles"
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

import useToastify from "../hooks/useToastify";
import useContacts from "../hooks/useContacts";
import useLoadScreen from "../hooks/useLoadScreen";
import usePermissions from "../hooks/usePermissions";

import { Box, Typography } from "@mui/material"
import LeftMenu, { LEFTMENUWIDTH } from "../components/gui/drawers/LeftMenu";
import RightMenu, { RIGHTMENUWIDTH } from "../components/gui/drawers/RightMenu";

import MobileAppBar from "../components/gui/MobileAppBar";
import MobileMenuDrawer from "../components/gui/drawers/MobileMenuDrawer";

import { fixLocationString } from "../helper";
import jwt_decode from "jwt-decode";

import CssBaseline from '@mui/material/CssBaseline';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'isMobileOrTable' })(({theme, isMobileOrTable}) => ({
    flexGrow: 1,
    padding: theme.spacing(2),
    marginLeft: 0,
    ...(isMobileOrTable && {
        paddingTop: '65px',
        paddingBottom: '0px',
        height: '100vh',
    })
}))

const CostumeBox = styled(Box, { shouldForwardProp: (prop) => prop !== 'isMobileOrTable' })(({theme, isMobileOrTable}) => ({
    ...(isMobileOrTable && {
        flexGrow: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start !important',
        alignItems: 'flex-start !important',
    })
}))

const DashboardLayout = () => {

    const { loadAllContacts } = useContacts()
    const { hideLoadscreen } = useLoadScreen()
    const { showErrToast } = useToastify()
    const { setPermissions } = usePermissions()

    const { isAuthenticated, user, loginWithRedirect, getAccessTokenSilently, logout } = useAuth0()
    const navigate = useNavigate()

    const isMobileOrTable = useMediaQuery({ query: `(max-width: 1200px)` });
    const location = useLocation();

    const [leftMenuOpen, setLeftMenuOpen] = useState(false)

    const openLeftMenu = _ =>  setLeftMenuOpen(true)
    const closeLeftMenu = _ =>  setLeftMenuOpen(false)

    const [ user_nickname, user_picture, uer_role ] = useMemo(() => {
        if (!isAuthenticated) return [null, null]

        const { nickname,  picture } = user
        const roles = user['https://my-app.example.com/roles']
        let role = "guest"

        if (roles && roles.length > 0) role = roles[0].replace('_', ' ')

        return [nickname,  picture, role]
    }, [isAuthenticated])

    useEffect(() => {
        if (!isAuthenticated ) {
            showErrToast('Please, authenticate.')
            hideLoadscreen()

            if (location.pathname !== "/") navigate('/')
        } else {
            const auth0_domain = import.meta.env.VITE_AUTH0_DOMAIN;
            const audience = `https://${auth0_domain}/api/v2/`;

            const getToken = async () => {
                const token = await getAccessTokenSilently({
                    ignoreCache: true,
                    audience: audience,
                    scope: '',
                });

                var decoded = jwt_decode(token);

                setPermissions(decoded.permissions, token);
                hideLoadscreen()
            }

            getToken();
        }
    
    }, [isAuthenticated])

    return (
        <Box sx={{display:'flex', height: '100vh'}}>
            <CssBaseline />
           
            { !isMobileOrTable && ( <LeftMenu />) }
            { isMobileOrTable && ( <MobileMenuDrawer open={leftMenuOpen} onClose={closeLeftMenu} isAuthenticated={isAuthenticated} nickname={user_nickname} role={uer_role} />) }

            <Main isMobileOrTable={isMobileOrTable}>
                <MobileAppBar isMobileOrTable={isMobileOrTable} isAuthenticated={isAuthenticated} user={user} logout={logout} login={loginWithRedirect} openMenu={openLeftMenu}/>

                {!isMobileOrTable && (<Typography className="fnt-montserrat" fontWeight={300} fontSize={12}>Law Office of Blanca Zarazua / </Typography>)}
                
                <CostumeBox isMobileOrTable={isMobileOrTable}>
                    <Typography variant="h1" component="div" className="fnt-roboto" fontWeight={isMobileOrTable? 300 : 700} fontSize={18} textTransform="capitalize" sx={{ ...(isMobileOrTable && { marginBottom: '10px' }) }}>{fixLocationString(location.pathname)}</Typography>
                    <Outlet context={[isMobileOrTable]} />
                </CostumeBox>
            </Main>

            { !isMobileOrTable && (<RightMenu />) }
        </Box>
    )
}

export default DashboardLayout