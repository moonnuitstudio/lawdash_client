import React from 'react'

import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'

import usePermissions from '../../../hooks/usePermissions'
import { useNavigate } from 'react-router-dom'

const MobileItemMenu = ({text, link, children, onClose}) => {

  const { checkPermissionTab } = usePermissions()
  const navigate = useNavigate()

  const redirect = _ => {
    if (link) {
      navigate(link) 
      onClose()
    }
  }

  if (!checkPermissionTab(link) && link !== '/') return null

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={redirect}>
            <ListItemIcon>
                {children}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItemButton>
    </ListItem>
  )
}

export default MobileItemMenu