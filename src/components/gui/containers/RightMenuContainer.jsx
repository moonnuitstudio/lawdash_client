import { RightMenuProvider } from "../../../contexts/RightMenuContext"

import { useState, useEffect, useRef } from "react"

import { 
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material"

import ContextMenu from "../drawers/ContextMenu"

const RightMenuContainer = ({children, contextList}) => {

    const contextMenuRef = useRef(null)

    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState({})

    const [points, setPoints] = useState({
      x: 0,
      y: 0,
    })

    useEffect(() => {
        const handleClick = () => setClicked(false);

        document.addEventListener("click", handleClick);

        return () => {
          document.removeEventListener("click", handleClick);
        };
    }, []);

    const handleContextMenu = (event, elementRef, data) => {
        if (!contextMenuRef || !elementRef) return;

        event.preventDefault()
        setData(data)

        const elementHeight = elementRef.current.clientHeight
        const contextHeight = contextMenuRef.current.clientHeight

        const rect = elementRef.current.getBoundingClientRect()

        const left = rect.left
        const right = rect.right

        let pointX = event.pageX

        if (left >= pointX) pointX = left + 30;
        else if (right <= (pointX + 100)) pointX = right - 130;
        
        const points = {
            x: pointX + 5,
            y: rect.top + (elementHeight / 3) - 20,
        }
 
       setClicked(true)
       setPoints(points);
    }

    return (
        <RightMenuProvider value={{ contextMenuRef, handleContextMenu }}>
            {children}

            <ContextMenu show={clicked} contextMenuRef={contextMenuRef} top={points.y} left={points.x}>
                <List>
                    <ListItem disablePadding>
                        {
                            contextList.map((option, index) => (
                                <ListItemButton key={index} onClick={() => { option.action(data) }}>
                                    <ListItemIcon>
                                        {option.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={option.text} className="fnt-montserrat" sx={{ fontWeight: 700 }} />
                                </ListItemButton>
                            ))
                        }
                    </ListItem>
                </List>
            </ContextMenu>
        </RightMenuProvider>
    )
}

export default RightMenuContainer