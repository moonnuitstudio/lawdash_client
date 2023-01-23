import { styled, useTheme } from "@mui/material/styles"

import {
    Toolbar,
    AppBar,
    Typography
} from '@mui/material'

const CustomAppBar = styled(AppBar)(_ => ({
    width: "100%",
    marginLeft: "0px",
    left: 0,
}))

const MobileAppBar = ({isMobileOrTable}) => {
    return (
        <>
            {
                isMobileOrTable && (
                    <CustomAppBar  elevation={0} >
                        <Toolbar>
                            <Typography variant="h6" noWrap component="div">
                                Header
                            </Typography>
                        </Toolbar>
                    </CustomAppBar>
                )
            }
        </>
    )
}

export default MobileAppBar