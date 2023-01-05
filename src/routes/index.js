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
import TravelStep from "../pages/TravelStep"
import MyTravelStep from "../pages/MyTravelStep"
import Forum from "../pages/Forum"
import ForumDetail from "../pages/ForumDetail"
import TravelItenerary from "../pages/TravelItenerary"

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
      {
        path: "travel-step",
        element: <TravelStep />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/travelItenerary",
        element: <TravelItenerary />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/my-travel-step",
        element: <MyTravelStep />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/forum",
        element: <Forum />,
        errorElement: <ErrorPage />,
      },
      {
        path: "forum/1",
        element: <ForumDetail />,
        errorElement: <ErrorPage />,
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
