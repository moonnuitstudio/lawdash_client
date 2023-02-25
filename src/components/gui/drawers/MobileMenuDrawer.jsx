import React from 'react'

import { styled, useTheme } from '@mui/material/styles';

import {
  Drawer,
  IconButton,
  Divider,
  Box,
  List,
  Typography,
} from '@mui/material'
import MobileItemMenu from '../lists/MobileItemMenu';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 300;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const MobileMenuDrawer = ({open, onClose, isAuthenticated, nickname, role}) => {
  const theme = useTheme();

  return (<>
      <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              border: 'none !important',
              boxShadow: '5px 5px 20px -8px rgba(0,0,0,0.5)',
            },
            ...(open && {
              zIndex: 9999,
            })
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Box sx={{ background: 'var(--dark-2-color)' }}>
            <DrawerHeader>
              <IconButton className='btn-color-light-2' onClick={onClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            {
              !isAuthenticated? (<Typography color="white" variant="h5" fontWeight={500} component="p" className='fnt-roboto' sx={{padding: '0px 10px 15px', fontSize: '13px', textTransform: 'uppercase'}}>Guest</Typography>) :
              (<Box sx={{padding: '0px 10px 15px'}}>
                <Typography color="white" variant="h5" fontWeight={500} component="p" className='fnt-roboto' sx={{fontSize: '15px', textTransform: 'uppercase'}}>{nickname}</Typography>
                <Typography color="white" component="p" className='fnt-montserrat' fontWeight={200} fontStyle="italic" sx={{fontSize: '14px'}}>{role}</Typography>
              </Box>)
            }
          </Box>
          <List>
            <MobileItemMenu text="Home" link="/" onClose={onClose}><HomeIcon /></MobileItemMenu>
            {isAuthenticated && (<>
              <MobileItemMenu text="Contacs" link="contacts" onClose={onClose}><ContactPhoneIcon /></MobileItemMenu>
            </>)}
          </List>
      </Drawer>
      
      {open && (<Box onClick={onClose} sx={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 9990, background: 'rgba(0,0,0, .5)'}}></Box>)}
  </>)
}

export default MobileMenuDrawer