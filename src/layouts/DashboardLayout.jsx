import { Outlet } from "react-router-dom"

import { styled, useTheme } from "@mui/material/styles"
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";
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

import { fixLocationString } from "../helper";
import jwt_decode from "jwt-decode";

import CssBaseline from '@mui/material/CssBaseline';

const Main = styled('main')(({theme}) => ({
    flexGrow: 1,
    padding: theme.spacing(2),
    marginLeft: 0,
}))

const DashboardLayout = () => {

    const { loadAllContacts } = useContacts()
    const { hideLoadscreen } = useLoadScreen()
    const { showErrToast } = useToastify()
    const { setPermissions } = usePermissions()

    const { isAuthenticated, user, getIdTokenClaims, getAccessTokenSilently } = useAuth0()
    const navigate = useNavigate()

    const isMobileOrTable = useMediaQuery({ query: `(max-width: 1200px)` });
    const location = useLocation();

    const [leftMenuOpen, setLeftMenuOpen] = useState(true)

    const openLeftMenu = _ =>  setLeftMenuOpen(true)
    const closeLeftMenu = _ =>  setLeftMenuOpen(false)

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

            <LeftMenu open={leftMenuOpen} />

            <Main>
                <MobileAppBar isMobileOrTable={isMobileOrTable} />

                {!isMobileOrTable && (
                    <>
                        <Typography className="fnt-montserrat" fontWeight={300} fontSize={12}>Law Office of Blanca Zarazua / </Typography>
                        <Typography variant="h1" component="div" className="fnt-roboto" fontWeight={700} fontSize={18} textTransform="capitalize">{fixLocationString(location.pathname)}</Typography>
                    </>
                )}

                <Outlet />
            </Main>

            { !isMobileOrTable && (<RightMenu />) }
        </Box>
    )
}

export default DashboardLayout