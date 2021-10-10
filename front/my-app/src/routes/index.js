import MarketplacePage from "../pages/MarketplacePage";
import FavoritePage from "../pages/FavoritePage";
import SignInPage from "../pages/SignInPage";


export const privateRoutes=[
    {
        path:'/', exact:true, component:MarketplacePage
    },
    {
        path:'/favorite', exact:true, component:FavoritePage
    },
]

export const publicRoutes=[
    {
        path:'/', exact:true, component:MarketplacePage
    },
    {
        path:'/sign-in', exact:true, component:SignInPage
    },
]
