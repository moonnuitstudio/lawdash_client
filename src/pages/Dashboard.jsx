import { Responsive, WidthProvider } from "react-grid-layout";
import { useOutletContext } from 'react-router-dom';

import { useAuth0 } from "@auth0/auth0-react";

import { 
  Box
} from "@mui/material"

import RecentContactCards from "../components/gui/cards/dashboard/RecentContactCards";

import { useState } from "react";

const ResponsiveReactGridLayout  = WidthProvider(Responsive)

const Dashboard = ({}) => {
   // layout is an array of objects, see the demo for more complete usage
    const [isMobileOrTable, containerWidth] = useOutletContext()
    const { isAuthenticated } = useAuth0()

    const layout = [
        { i: "1", x: 0, y: 0, w: 1, h: 1 },
    ];  

    if (!isAuthenticated) return null

    return (
      <Box sx={{width: "100%", paddingTop: '30px'}}>
        <ResponsiveReactGridLayout
            measureBeforeMount={true}
            rowHeight={300}
            className="layout"
            layout={layout}
            breakpoints={{ lg: 1100, md: 900, sm: 600 }}
            cols={{ lg: 3, md: 2, sm: 1 }}
            width={containerWidth}
          >
            <div key="a1"><RecentContactCards /></div>
        </ResponsiveReactGridLayout>
      </Box>
    )
}

export default Dashboard