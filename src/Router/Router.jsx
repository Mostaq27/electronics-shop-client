import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        
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