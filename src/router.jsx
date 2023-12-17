import { createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loaderMenu } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, { createActionOrder } from "./features/order/CreateOrder";
import Order, { loaderOrder } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: loaderMenu,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "order/new",
        element: <CreateOrder />,
        action: createActionOrder,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: loaderOrder,
        errorElement: <Error />,
      },
    ],
  },
]);

export default router;
