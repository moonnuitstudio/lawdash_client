import { useRef } from "react";
import { RightMenuConsumer } from "../../../../contexts/RightMenuContext";

import { 
    TableRow,
    TableCell,
    Checkbox,
} from "@mui/material";

const ActionTableRow = ({index, isItemSelected, row, labelId, handleClick, headCells}) => {

    const rowRef = useRef(null)

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
                        key={index}
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