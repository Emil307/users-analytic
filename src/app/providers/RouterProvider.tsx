import {createBrowserRouter} from "react-router-dom";
import { UsersPage } from "../../pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <UsersPage />,
    },
]);
