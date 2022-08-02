import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"

import WorkStation from "../pages/WorkStation"
import LogSummary from "../pages/LogSummary"
import DottedChart from "../pages/DottedChart"
import ProcessMap from "../pages/ProcessMap"
import {Navigate} from 'react-router-dom'

export default [
    {
        path: '/workstation',
        element: <WorkStation />
    },
    {
        path: '/logsummary',
        element: <LogSummary/>
    },
    {
        path: '/dottedchart',
        element: <DottedChart/>
    },
    {
        path: '/processmap',
        element: <ProcessMap/>
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/home',
        element: <Home />,
        children:[
            {
                path:'news',
                element:<News/>
            },
            {
                path:'message',
                element:<Message/>
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/workstation' />
    }
]