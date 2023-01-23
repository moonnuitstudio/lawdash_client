import { styled, useTheme } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

import { 
    AppBar, 
    Box,
    Toolbar,
    Typography,
    Drawer
} from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';

const drawerWidth = 60

const CustomMain = styled('main')(({theme}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 0,
}))

const CustomAppBar = styled(AppBar)(({theme}) => ({
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
}))

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const MainMenuDrawer = ({ width }) => {

    const theme = useTheme();
    const [open, setOpen] = useState(false)

    return (
        <Box sx={{display:'flex'}}>
            <CssBaseline />
            <CustomAppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Header
                    </Typography>
                </Toolbar>
            </CustomAppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        border: 'none',
                    },
                }}
                variant="persistent"
                anchor="left">
                <DrawerHeader>Hello World</DrawerHeader>
            </Drawer>

            <CustomMain>
                <DrawerHeader />
                <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </CustomMain>
        </Box>
    )
}

MainMenuDrawer.defaultProps = {
    width: drawerWidth,
}  

export default MainMenuDrawer