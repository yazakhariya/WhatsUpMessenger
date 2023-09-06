import { RouteObject } from 'react-router-dom'
import LoginPage from 'src/pages/LoginPage'
import NotFound from 'src/pages/NotFound'

const router: RouteObject[] = [
    {
     path: '/',
     element: <LoginPage />,
   },
   {
     path: '*',
     element: <NotFound />,
   },
 ]
 
 export default router