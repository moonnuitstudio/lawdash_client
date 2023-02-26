import GridLayout, { WidthProvider, Responsive } from "react-grid-layout";
import { useOutletContext } from 'react-router-dom';

import RecentContactCards from "../components/gui/cards/dashboard/RecentContactCards";

const ResponsiveReactGridLayout  = WidthProvider(Responsive)

const Dashboard = () => {
   // layout is an array of objects, see the demo for more complete usage
   const [isMobileOrTable, containerWidth] = useOutletContext()

   const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 1, y: 0, w: 1, h: 1 },
    { i: "c", x: 4, y: 0, w: 1, h: 1 }
  ];

  return (
    <GridLayout
        className="layout"
        layout={layout}
        cols={3}
        rowHeight={30}
        width={containerWidth}
      >
        <div key="a"><RecentContactCards /></div>
      </GridLayout>
  )
}

export default Dashboard