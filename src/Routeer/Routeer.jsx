import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Components/Statistics/Statistics";

import ErrorPage from "../Components/ErrorPage/ErrorPage";
import CardDetails from "../Components/CardDetails/CardDetails";


const myCreateRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () =>fetch('/donet.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
                
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/cardOne/:id",
                element: <CardDetails></CardDetails>,
                loader: () =>fetch('/donet.json')
            }
        ]
    }
])
   

export default myCreateRoute;