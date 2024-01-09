import { createBrowserRouter, Navigate } from "react-router-dom";
import { GuestLayout, MainLayout } from "./components";
import { Register, Login, Home, Book, OtpPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book/:bookName",
        element: <Book />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/otp-verification",
        element: <OtpPage />,
      },
    ],
  },
]);

export default router;
