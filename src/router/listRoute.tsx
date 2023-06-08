import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import { Channel } from "../pages/Channel/Channel";
import App from "../App";
import FundingPage from "../pages/Funding/Funding";
import Report from "../pages/Report/Report";

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
      { path: "/funding", element: <FundingPage /> },
      { path: "/report", element: <Report /> }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
