import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import Layout from './Layout'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Wish from './pages/Wish/Wish'
import './App.scss'
import ProductDetail from './components/ProductDetail/ProductDetail'
// import { Search } from '@mui/icons-material'

function App() {
  // const location = useLocation();
  // const background = location.state && location.state.background;

  const PageNotFound = ()=>{
    return(
      <h1>Page Not Found 404</h1>
    )
  }
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[
        {
          path: '/',
          element: <Home />,
          children:[
            {
              path: '/product/:id',
              element: <ProductDetail />
            }
          ]        
        },
        {
          path: '/cartpage',
          element: <Cart />
        },
        {
          path: "/wishpage",
          element: <Wish />
        },
        {
          path: '/search',
          element: <Search />
        },
        {
          path: '/productDetail/:id',
          element: <ProductDetail />
        },
        {
          path: '*',
          element: <PageNotFound />
        }
      ]
    }
  ])
  return (
      <RouterProvider router={routes} />
  )
}

export default App