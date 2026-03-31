
import Vehicles from "../pages/Vehicles/Vehicles";
import { useRoutes } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Overview from '../pages/Overview/Overview'
import Document from "../pages/Documents/Document";
import GalleryVehicle from "../pages/Gallery/Gallery";
import HistoryVehicle from "../pages/History/History";
import LayoutPage from "../pages/VehiclesPage/VehiclesPage";
import { Navigate } from "react-router-dom";

export const AppRouter = ({setTheme,theme}) => {
    return useRoutes([
         {
        path: "/",
        element: <Layout setTheme={setTheme} theme={theme} />,
        children: [
            {
                index: true,
                element: <Vehicles />,
            },
            {
                path: "vehicles",
                element: <Vehicles />,
            },
            {
                path: "vehicles/:id",
                element: <LayoutPage />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="overview" replace />
                    },
                    {
                        path: "overview",
                        element: <Overview />
                    },
                    {
                        path: "documents",
                        element: <Document/>,

                    },
                    {
                        path: "gallery",
                        element: <GalleryVehicle/>,

                    },
                    {
                        path: "history",
                        element: <HistoryVehicle/>,

                    },

                ]
            },
            {
                path: "settings",
                element: <h1>Settings</h1>,
            },
            {
                path: "profile",
                element: <h2>Profile</h2>,
            },
            {
                path: "logout",
                element: <h2>Logout</h2>,
            },
        ],
    },


    ])
};

