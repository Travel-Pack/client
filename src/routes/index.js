import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DestinationDetailPage } from "../pages/DestinationDetailPage"
import { DestinationInformation } from "../components/DestinationDetailPage/DestinationInformation"
import { DestinationReview } from "../components/DestinationDetailPage/DestinationReview"
import { DestinationCovid } from "../components/DestinationDetailPage/DestinationCovid"
import ErrorPage from "../pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/destination/:destinationName/",
    element: <DestinationDetailPage />,
    children: [
      {
        path: "information",
        element: <DestinationInformation />,
        errorElement: <ErrorPage />,
      },
      {
        path: "review",
        element: <DestinationReview />,
        errorElement: <ErrorPage />,
      },
      {
        path: "covid",
        element: <DestinationCovid />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

export default router
