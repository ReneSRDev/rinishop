import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShopProvider } from '../../Context'
import Navbar from '../../Components/Navbar'
import Home from '../Home'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Footer from '../../Components/Footer'
import './style.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:brand", element: <Home /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
}

const App = () => {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </ShopProvider>
  )
}

export default App
