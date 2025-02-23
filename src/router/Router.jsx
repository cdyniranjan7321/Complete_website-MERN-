import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import Appointment from "../pages/appointment/Appointment";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import BookAppointment from "../pages/appointment/BookAppointment";
import StaffSelection from "../pages/appointment/StaffSelection";
import DateTimeSelection from "../pages/appointment/DateTimeSelection";
import BookingConfirmation from "../pages/appointment/BookingConfirmation";

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
            { path: "/appointment/book", 
                element: <BookAppointment /> 
            },
            {
                path:"/staff-selection",
                element: <StaffSelection/>
            },
            {
                path: "/appointment/summary",
                element:<DateTimeSelection/>
            },
            {
                 path:"/bookingconfirmation",
                 element:<BookingConfirmation/>
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