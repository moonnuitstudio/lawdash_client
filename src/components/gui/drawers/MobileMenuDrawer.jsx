import React from 'react'

import { styled, useTheme } from '@mui/material/styles';

import {
  Drawer,
  IconButton,
  Divider,
  Box
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 300;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const MobileMenuDrawer = ({open, onClose, isAuthenticated, nickname}) => {
  const theme = useTheme();

  return (<>
      <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
            ...(open && {
              zIndex: 9999,
            })
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            {isAuthenticated? `Hello, ${nickname}!` : 'Law Dash'}
            <IconButton onClick={onClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
      </Drawer>
      
      {open && (<Box onClick={onClose} sx={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 9990, background: 'rgba(0,0,0, .5)'}}></Box>)}
  </>)
}

export default MobileMenuDrawer