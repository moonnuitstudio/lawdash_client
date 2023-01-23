import { 
    Box,
} from "@mui/material"

import useLoadScreen from "../../hooks/useLoadScreen"

const LoadScreen = () => {

  const { displayloadscreen } = useLoadScreen()

  if (!displayloadscreen) return null

  return (
    <Box component="section" sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,.25)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
        </div>
    </Box>
  )
}

export default LoadScreen