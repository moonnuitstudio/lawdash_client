import { animated, useSpring } from '@react-spring/web'
import { forwardRef } from 'react';

import {
    Box,
    Backdrop,
    Modal,
    Grid,
    Typography,
    IconButton
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';
  
const Fade = forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '700px',
    background: '#f2f2f2',
    borderRadius: '10px'
};

const SimpleModal = ({isOpen, handleClose, children, title}) => {
  return (
    <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style} p={3}>
            <Grid container spacing={2} marginBottom={2}>
              <Grid item xs={10}>
                  <Typography variant="subtitle1" component="p" className="fnt-montserrat" sx={{fontWeight:700,textTransform:'uppercase',letterSpacing:'0px'}}>{title}</Typography>
              </Grid>
              <Grid item xs={2} sx={{display:'flex', justifyContent:'flex-end'}}>
                  <IconButton aria-label="Close Modal" onClick={handleClose}>
                      <CloseIcon fontSize="small" />
                  </IconButton>
              </Grid>
            </Grid>
            {children}
          </Box>
        </Fade>
    </Modal>
  )
}

export default SimpleModal