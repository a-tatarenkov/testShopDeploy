import {createBrowserRouter} from "react-router-dom";
import BestSellers from "../Components/BestSellers/BestSellers";
import Product from "../Components/Product/Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BestSellers />,
    },
    {
        path: "/product/:productId",
        element: <Product />
    }
])

export default router;