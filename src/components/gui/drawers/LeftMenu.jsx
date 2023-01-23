import { styled, useTheme } from "@mui/material/styles"
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"

import usePermissions from "../../../hooks/usePermissions";

import { 
    Drawer,
    List,
} from "@mui/material"
import ListMenuButton from "../lists/ListMenuButton"

import betaLogo from '../../../assets/img/beta_logo.png'
import WorkIcon from '@mui/icons-material/Work'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ViewListIcon from '@mui/icons-material/ViewList';

const LEFTMENUWIDTH = 60

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'center',
    height: LEFTMENUWIDTH,
    width: '100%',
    maxHeight: `${LEFTMENUWIDTH}px !important`,
    minHeight: `${LEFTMENUWIDTH}px !important`,
    boxSizing: 'border-box'
}));

const LeftMenu = () => {

    const { hasPermissions, checkPermissionTab } = usePermissions()

    const { isAuthenticated } = useAuth0()
    const navigate = useNavigate()
    
    return (
        <Drawer sx={{
            width: LEFTMENUWIDTH,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            '& .MuiDrawer-paper': {
                width: LEFTMENUWIDTH,
                visibility: 'visible !important',
                boxSizing: 'border-box',
                transform: 'none !important',
                background: 'transparent',
                border: 'none',
            },
        }}
        variant="persistent"
        anchor="left"
        className="bg-darkest"
        >
            <DrawerHeader className="bg-dark-2 cursor-pointer">
                <img src={betaLogo} width="30px" onClick={_ => navigate('/')} />
            </DrawerHeader>

            <List sx={{paddingTop: '20px !important'}}>
                {isAuthenticated && (
                    <>
                        <ListMenuButton itemSize={LEFTMENUWIDTH} link="matters" tooltip="Matters"><WorkIcon fontSize="small" /></ListMenuButton>
                        <ListMenuButton itemSize={LEFTMENUWIDTH} link="clients" tooltip="Clients"><AccountBoxIcon fontSize="small" /></ListMenuButton>
                        <ListMenuButton itemSize={LEFTMENUWIDTH} link="contacts" tooltip="Contacts"><ContactPhoneIcon fontSize="small" /></ListMenuButton>
                        <ListMenuButton itemSize={LEFTMENUWIDTH} link="intakes" tooltip="Intakes"><AssignmentIcon fontSize="small" /></ListMenuButton>
                        <ListMenuButton itemSize={LEFTMENUWIDTH} link="tasks" tooltip="Tasks"><ViewListIcon fontSize="small" /></ListMenuButton>
                    </>
                )}
            </List>
        </Drawer>
    )
}

export default LeftMenu

export { LEFTMENUWIDTH }