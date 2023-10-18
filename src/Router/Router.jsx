import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import AddProduct from "../pages/AddProduct/AddProduct";
import About from "../pages/About/About";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/addproduct',
            element: <AddProduct></AddProduct>
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