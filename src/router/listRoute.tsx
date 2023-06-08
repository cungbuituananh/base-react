import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Auth/LoginPage";
import { Channel } from "../pages/Channel/Channel";
import App from "../App";

export interface RoutesProps {
  path: string;
  name?: string;
  element?: any;
  route?: any;
  icon?: string;
  header?: string;
  roles?: string[];
  children?: RoutesProps[];
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/channel",
        element: <Channel />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
