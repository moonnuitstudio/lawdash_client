import React from 'react'

import {
    Card,
    CardHeader,
    Avatar,
    IconButton
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { indigo } from '@mui/material/colors';

import { styled } from '@mui/material/styles';

const CuatomCard = styled(Card)({
    maxWidth: 345, 
    borderRadius: 0, 
    background: 'transparent !important',
    '& .MuiCardHeader-root': {
        padding: '16px 3px',
        position: 'realative',
        '& .MuiCardHeader-avatar': {
            marginRight: '9px',
            '& .MuiAvatar-root': {
                fontSize: '14px',
            }
        },
        '& .MuiCardHeader-action': {
            position: 'absolute',
            zIndex: '500',
            top: '20px',
            right: '20px',
        },
        '& .MuiCardHeader-content': {
            '& .MuiCardHeader-title': {
                fontFamily: "'Roboto', sans-serif !important",
                fontWeight: 700,
                fontSize: '14px'
            },
            '& .MuiCardHeader-subheader': {
                fontFamily: "'Montserrat', sans-serif !important",
                fontSize: '12px',
                marginTop: '-3px',
            }
        }
    },
})

const UserCard = ({nickname, picture, role}) => {
  return (
    <CuatomCard elevation={0}>
      <CardHeader
        avatar={
            <Avatar alt="Remy Sharp" src={picture} />
        }
        action={
          <IconButton aria-label="settings">
            <SettingsIcon />
          </IconButton>
        }
        title={nickname}
        subheader={role}
      />
    </CuatomCard>
  )
}

export default UserCard