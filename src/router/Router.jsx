import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import Appointment from "../pages/appointment/Appointment";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/services",
                element: <Services/>
            },
            {
                path:"/appointment",
                element:<Appointment/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    },
]);

export default router;