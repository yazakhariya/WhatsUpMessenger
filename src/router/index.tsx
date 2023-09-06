import router from './routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GlobalStyle } from 'src/theme/global/global.style'

const RoutesProvider = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={createBrowserRouter(router)}></RouterProvider>
    </>
  )
}

export default RoutesProvider
