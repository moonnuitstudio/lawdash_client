import { useRef } from "react";
import { RightMenuConsumer } from "../../../../contexts/RightMenuContext";

import { 
    TableRow,
    TableCell,
    Checkbox,
} from "@mui/material";

const ActionTableRow = ({isItemSelected, row, labelId, handleClick, headCells}) => {

    const rowRef = useRef(null)

    const handleRightClick = event => {
        event.preventDefault();

        //console.log(contextMenuRef)

        // const elementHeight = rowRef.current.clientHeight
        // const contextHeight = contextMenuRef.current.clientHeight
        // const rect = rowRef.current.getBoundingClientRect();

        // console.log(contextHeight)

        // const left = rect.left
        // const right = rect.right

        // let pointX = event.pageX

        // console.log(right, (pointX + 100))

        // if (left >= pointX) pointX = left + 30;
        // else if (right <= (pointX + 100)) pointX = right - 130;
        
        // const points = {
        //     x: pointX,
        //     y: rect.top + (elementHeight / 3),
        // }

        //handleContextMenu(event, points)
    }

    return (
        <RightMenuConsumer>
            {context => {

                const { handleContextMenu } = context

                return (
                    <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{ cursor: 'pointer', ...(isItemSelected && { fontWeight: 'Bold' }) }}
                        ref={rowRef}
                        >
                            <TableCell padding="checkbox">
                                <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                    'aria-labelledby': labelId,
                                }}
                                onClick={(event) => handleClick(event, row.id)}
                                />
                            </TableCell>
                
                            {headCells.map((header, index) => {
                            const propety = header.id;
                            var element = row[propety];
                
                            if (element == null || element.trim() == "") element = "None"
                
                            return index == 0? (
                                <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                sx={{ ...(isItemSelected && { fontWeight: 'Bold' }) }}
                                onContextMenu={(e) => handleContextMenu(e, rowRef, row)}
                                > 
                                {element}
                                </TableCell>
                            ) : (
                                <TableCell 
                                onContextMenu={(e) => handleContextMenu(e, rowRef, row)}
                                sx={{ ...(isItemSelected && { fontWeight: 'Bold' }) }} 
                                align="left">
                                {element}
                                </TableCell>
                            )
                            })}
                    </TableRow>
                  )
            }}
        </RightMenuConsumer>
    )
}

export default ActionTableRow