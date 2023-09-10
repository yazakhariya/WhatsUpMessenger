import { RouteObject } from 'react-router-dom'
import ChatPage from 'src/pages/ChatPage/ChatPage'
import LoginPage from 'src/pages/LoginPage'
import NotFound from 'src/pages/NotFound'

const router: RouteObject[] = [
    {
     path: '/',
     element: <LoginPage />,
   },
   {
    path: '/chat',
    element: <ChatPage />,
  },
   {
     path: '*',
     element: <NotFound />,
   },
 ]
 
 export default router