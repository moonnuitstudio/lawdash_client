import React from 'react'

import { styled, Box } from '@mui/material'

const CustomAppBar = styled(Box)(_ => ({
    borderRadius: "4px",
    padding: "0px 5px 0px 0px",
    margin: "5px 0",
    boxSizing: "border-box",
    position: 'absolute',
    background: '#AC9B86',
}))

const ContextMenu = ({children, top, left, contextMenuRef, show}) => {

  const styles = { 
    top: `-500px`, 
    left: `-500px`,
    opacity: 0,
    '& .MuiButtonBase-root': {
      background: 'none !important',
      '& .MuiListItemText-root span': {
        color: '#4F473D',
        
      },
      '& .MuiListItemIcon-root': {
        minWidth: '30px',
      },
      '& span': {
        background: 'none !important',
      }
    },
    ...(show && {
      opacity: 1,
      top: `${top}px`, 
      left: `${left}px`,
      boxShadow: '5px 5px 15px -10px rgba(0,0,0,0.75)',
    })
  }

  return (
    <CustomAppBar ref={contextMenuRef} sx={styles}>{children}</CustomAppBar>
  )
}

export default ContextMenu