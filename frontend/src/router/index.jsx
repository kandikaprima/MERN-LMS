import { createBrowserRouter, redirect } from "react-router-dom";
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
import secureLocalStorage from "react-secure-storage";
import { MANAGER_SESSION, STORAGE_KEY, STUDENT_SESSION } from "../utils/const";
import { getCourseDetail, getCourses } from "../services/courseService";
import { getCategories } from "../services/categoryService";
import { getDetailContent } from "../services/contentService";
import ManageStudentCreatePage from "../pages/manager/students-create";
import {
  getDetailStudent,
  getStudent,
  getStudentCourse,
  getStudentCoursesById,
} from "../services/studentService";
import StudentCourseList from "../pages/manager/student-course";
import StudentForm from "../pages/manager/student-course/studentForm";
import { getOverviews } from "../services/overviewService";
import ForgotPasswordPage from "../pages/forgot-password";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomepage />,
  },
  {
    path: "/manager/sign-in",
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY);

      if (session && session.role === "manager") {
        throw redirect("/manager");
      }

      return true;
    },
    element: <SignInPage />,
  },
  {
    path: "/manager/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/manager/sign-up",
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY);

      if (session && session.role === "manager") {
        throw redirect("/manager");
      }

      return true;
    },
    element: <SignUpPage />,
  },
  {
    path: "/succes-checkout",
    element: <SuccesCheckoutPage />,
  },
  {
    path: "/manager",
    id: MANAGER_SESSION,
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY);

      if (!session || session.role !== "manager") {
        throw redirect("/manager/sign-in");
      }

      return session;
    },
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        loader: async () => {
          const overviews = await getOverviews();

          return overviews?.data;
        },
        element: <ManagerHomepage />,
      },
      {
        path: "/manager/courses",
        loader: async () => {
          const data = await getCourses();

          return data;
        },
        element: <ManageCoursePage />,
      },
      {
        path: "/manager/courses/create",
        loader: async () => {
          const categories = await getCategories();

          return { categories, course: null };
        },
        element: <ManageCreateCoursePage />,
      },
      {
        path: "/manager/courses/edit/:id",
        loader: async ({ params }) => {
          const categories = await getCategories();
          const course = await getCourseDetail(params.id);

          return { categories, course: course?.data };
        },
        element: <ManageCreateCoursePage />,
      },
      {
        path: "/manager/courses/:id",
        loader: async ({ params }) => {
          const course = await getCourseDetail(params.id);

          return course?.data;
        },
        element: <ManageCourseDetailPage />,
      },
      {
        path: "/manager/courses/:id/create",
        element: <ManageContentCreatePage />,
      },
      {
        path: "/manager/courses/:id/edit/:contentId",
        loader: async ({ params }) => {
          const content = await getDetailContent(params.contentId);

          return content?.data;
        },
        element: <ManageContentCreatePage />,
      },
      {
        path: "/manager/courses/:id/preview",
        loader: async ({ params }) => {
          const course = await getCourseDetail(params.id, true);

          return course?.data;
        },
        element: <ManageCoursePreviewPage />,
      },
      {
        path: "/manager/students",
        loader: async () => {
          const students = await getStudent();

          return students?.data;
        },
        element: <ManageStudentsPage />,
      },
      {
        path: "/manager/students/create",
        element: <ManageStudentCreatePage />,
      },
      {
        path: "/manager/students/edit/:id",
        loader: async ({ params }) => {
          const student = await getDetailStudent(params.id);

          return student?.data;
        },
        element: <ManageStudentCreatePage />,
      },
      {
        path: "/manager/courses/students/:id",
        loader: async ({ params }) => {
          const course = await getStudentCourse(params.id);

          return course?.data;
        },
        element: <StudentCourseList />,
      },
      {
        path: "/manager/courses/students/:id/add",
        loader: async () => {
          const students = await getStudent();

          return students?.data;
        },
        element: <StudentForm />,
      },
    ],
  },
  {
    path: "/student",
    id: STUDENT_SESSION,
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY);

      if (!session || session.role !== "student") {
        throw redirect("/student/sign-in");
      }

      return session;
    },
    element: <LayoutDashboard isAdmin={false} />,
    children: [
      {
        index: true,
        loader: async () => {
          const courses = await getStudentCoursesById();

          return courses?.data;
        },
        element: <StudentPage />,
      },
      {
        path: "/student/detail-course/:id",
        loader: async ({ params }) => {
          const course = await getCourseDetail(params.id, true);

          return course?.data;
        },
        element: <ManageCoursePreviewPage isAdmin={false} />,
      },
    ],
  },
  {
    path: "/student/sign-in",
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY);

      if (session && session.role === "student") {
        throw redirect("/student");
      }

      return true;
    },
    element: <SignInPage type="student" />,
  },
  {
    path: "/student/forgot-password",
    element: <ForgotPasswordPage type="student"/>,
  },
]);

export default router;
