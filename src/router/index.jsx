import {
    createBrowserRouter,

} from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import ItemForm from "../components/ItemForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/create",
                element: <ItemForm />
            },
            {
                path: "/edit/:id",
                element: <ItemForm />
            }
        ]
    },
]);

export default router;