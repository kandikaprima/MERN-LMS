import { createBrowserRouter } from "react-router-dom";
import ManagerHomepage from "../pages/manager/home";
import SignInPage from "../pages/sign-in";
import SignUpPage from "../pages/sign-up";
import SuccesCheckoutPage from "../pages/success-checkout";
import LayoutDashboard from "../components/layout";
import ManageCoursePage from "../pages/manager/courses";
import ManageCreateCoursePage from "../pages/manager/create-courses";
import ManageCourseDetailPage from "../pages/manager/course-detail";
import ManageContentCreatePage from "../pages/manager/course-content-create";
import ManageCoursePreviewPage from "../pages/manager/course-preview";
import ManageStudentsPage from "../pages/manager/students";
import StudentPage from "../pages/student/student-overview";

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
      },
      {
        path: '/manager/courses/create',
        element: <ManageCreateCoursePage />
      },
      {
        path: '/manager/courses/:id',
        element: <ManageCourseDetailPage />
      },
      {
        path: '/manager/courses/:id/create',
        element: <ManageContentCreatePage />
      },
      {
        path: '/manager/courses/:id/preview',
        element: <ManageCoursePreviewPage />
      },
      {
        path: '/manager/students',
        element: <ManageStudentsPage />
      },
    ]
  },
  {
    path: '/student',
    element: <LayoutDashboard isAdmin={false}/>,
    children: [
      {
        index: true,
        element: <StudentPage />
      },
      {
        path: '/student/detail-course/:id',
        element: <ManageCoursePreviewPage />
      },
    ]
  },
])

export default router