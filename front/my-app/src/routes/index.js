import Home from "../pages/Home";
import Testing from "../pages/Testing";
import {Login} from "../pages/Login";


export const privateRoutes=[
    {
        path:'/', exact:true, component:Home
    },
    {
        path:'/test', exact:true, component:Testing
    },
]

export const publicRoutes=[
    {
        path:'/', exact:true, component:Home
    },
    {
        path:'/login', exact:true, component:Login
    },
]
