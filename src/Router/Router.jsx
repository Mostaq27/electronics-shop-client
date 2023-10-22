import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import AddProduct from "../pages/AddProduct/AddProduct";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import BrandProduct from "../pages/BrandProduct/BrandProduct";
import ProductDetails from "../components/Productdetails/ProductDetails";
import PrivateRoutes from "./PrivateRoutes";

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Layout></Layout>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/brand.json')
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/addproduct',
            element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
        },
        {
          path: '/updateproduct/:id',
          element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes> ,
          loader: ({params}) => fetch(`https://electronics-shop-server.vercel.app/product/${params.id}`)
        },
        {
          path: '/brandproduct/:brand',
          element:<BrandProduct></BrandProduct>
        },
        {
          path: '/productdetails/:id',
          element:<PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element:<SignUp></SignUp>
        },
        {
          path: '/mycart',
          element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
          loader: ()=> fetch('https://electronics-shop-server.vercel.app/cart')
        }
        
      ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
  ]);

 
export default router;