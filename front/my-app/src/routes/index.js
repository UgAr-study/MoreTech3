import AllDatasetsPage from "../pages/AllDatasetsPage";
import MyDatasetsPage from "../pages/MyDatasetsPage";
import {LoginPage} from "../pages/LoginPage";


export const privateRoutes=[
    {
        path:'/', exact:true, component:AllDatasetsPage
    },
    {
        path:'/profile', exact:true, component:MyDatasetsPage
    },
]

export const publicRoutes=[
    {
        path:'/', exact:true, component:AllDatasetsPage
    },
    {
        path:'/login', exact:true, component:LoginPage
    },
]
