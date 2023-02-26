import { 
    Tooltip,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material"

import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom"

import usePermissions from "../../../hooks/usePermissions";

import { fixLocationString } from "../../../helper";

const ListMenuButton = ({itemSize, children, link, tooltip}) => {

    const navigate = useNavigate()
    const location = useLocation();

    const { checkPermissionTab } = usePermissions()

    const isActive = useMemo(
        () => {
            const [ mainurl ] = fixLocationString(location.pathname).split('/')

            return mainurl == link
        },
        [location.pathname]
    );

    if (!checkPermissionTab(link)) return null

    return (
        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={_ => { if (link) navigate(link) }} sx={{
                justifyContent: 'center', 
                alignItems: 'center',
                height: itemSize,
            }}
            className={`btn-color-white btn-hover-color-light-2 cursor-pointer ${isActive && 'btn-color-light-2-active'}`}>
                <Tooltip title={tooltip} placement="bottom-end">
                    <ListItemIcon sx={{
                        minWidth: 0,
                        }}>
                            {children}
                    </ListItemIcon>
                </Tooltip>
            </ListItemButton>
        </ListItem>
    )
}

export default ListMenuButton