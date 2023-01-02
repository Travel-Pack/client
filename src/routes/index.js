import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DestinationDetailPage } from "../pages/DestinationDetailPage"
import { DestinationInformation } from "../components/DestinationDetailPage/DestinationInformation"
import { DestinationReview } from "../components/DestinationDetailPage/DestinationReview"
import { DestinationCovid } from "../components/DestinationDetailPage/DestinationCovid"
import ErrorPage from "../pages/ErrorPage"
import App from "../App"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "destination/:destinationName",
        element: <DestinationDetailPage />,
        children: [
          {
            path: "",
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
    ],
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
])

export default router
