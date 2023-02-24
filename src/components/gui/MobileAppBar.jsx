import { styled, useTheme } from "@mui/material/styles"
import { useState, useMemo } from "react"

import {
    Toolbar,
    AppBar,
    Typography,
    Box,
    IconButton,
    Button,
    Tooltip,
    Avatar,
    Menu,
    MenuItem
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const CustomAppBar = styled(AppBar)(_ => ({
    width: "100%",
    marginLeft: "0px",
    left: 0,
    background: '#22223B',
}))

const MobileAppBar = ({isMobileOrTable, isAuthenticated, user, logout, login, openMenu}) => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const [ nickname, picture ] = useMemo(() => {
        if (!isAuthenticated) return [null, null]

        const { nickname,  picture } = user

        return [nickname,  picture]
    }, [isAuthenticated])

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            {
                isMobileOrTable && (
                    <Box sx={{ flexGrow: 1, padding: '0px !important' }}>
                        <CustomAppBar elevation={0} >
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={openMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" noWrap component="div" className="fnt-montserrat" sx={{ flexGrow: 1 }}>
                                    Law Dash
                                </Typography>
                                {
                                    isAuthenticated? (<>
                                        <Box sx={{ flexGrow: 0 }}>
                                            <Tooltip title="Open settings">
                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                    <Avatar alt={nickname} src={picture} />
                                                </IconButton>
                                            </Tooltip>
                                            <Menu
                                            sx={{ mt: '45px' }}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                            >
                                                <MenuItem onClick={logout}>
                                                    <Typography textAlign="center">Logout</Typography>
                                                </MenuItem>
                                            </Menu>
                                        </Box>
                                    </>) : (<Button color="inherit" className="fnt-montserrat" onClick={login}>Login</Button>)
                                }
                            </Toolbar>
                        </CustomAppBar>
                    </Box>
                )
            }
        </>
    )
}

export default MobileAppBar