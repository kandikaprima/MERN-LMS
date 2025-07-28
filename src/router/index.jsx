import { createBrowserRouter } from "react-router-dom";
import ManagerHomepage from "../pages/manager/home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccesCheckoutPage from "../pages/SuccesCheckout";
import LayoutDashboard from "../components/layout";
import ManageCoursePage from "../pages/manager/courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomepage />
  },
  {
    path: "/manager/sign-in",
    element: <SignInPage />
  },
  {
    path: "/manager/sign-up",
    element: <SignUpPage />
  },
  {
    path: "/succes-checkout",
    element: <SuccesCheckoutPage />
  },
  {
    path: "/manager",
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        element: <ManagerHomepage />
      },
      {
        path: '/manager/courses',
        element: <ManageCoursePage />
      }
    ]
  },
])

export default router