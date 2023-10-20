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
            element: <AddProduct></AddProduct>
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
          element: <MyCart></MyCart>
        }
        
      ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
  ]);

// const Router = () => {
//     return(
//         <div>

//         </div>
//     );
// };
export default router;