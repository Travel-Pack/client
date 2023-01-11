import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DestinationDetailPage } from "../pages/DestinationDetailPage"
import { DestinationInformation } from "../components/DestinationDetailPage/DestinationInformation"
import { DestinationReview } from "../components/DestinationDetailPage/DestinationReview"
import { DestinationCovid } from "../components/DestinationDetailPage/DestinationCovid"
import ErrorPage from "../pages/ErrorPage"
import FindTravel from "../pages/FindTravel"
import MyTravelStep from "../pages/MyTravelStep"
import Forum from "../pages/Forum"
import ForumDetail from "../pages/ForumDetail"
import TravelItenerary from "../pages/TravelItenerary"
import TravelStep from "../pages/TravelStep"
import FindDestination from "../components/CityPages/FindDestination"
import TravelCards from "../components/CityPages/TravelCards"
import { ProfilePage } from "../pages/ProfilePage"

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
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "find-byCity/:citySlug/",
        element: <FindDestination />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: ":type",
            element: <TravelCards />,
          },
        ],
      },
      {
        path: "find-travel",
        element: <FindTravel />,
        errorElement: <ErrorPage />,
      },
      {
        path: "travel-step",
        element: <TravelStep />,
        errorElement: <ErrorPage />,
      },
      {
        path: "travel-step/generated",
        element: <TravelItenerary />,
        errorElement: <ErrorPage />,
      },
      {
        path: "my-travel-step",
        element: <MyTravelStep />,
        errorElement: <ErrorPage />,
      },
      {
        path: "forum",
        element: <Forum />,
        errorElement: <ErrorPage />,
      },
      {
        path: "forum/:slug",
        element: <ForumDetail />,
        errorElement: <ErrorPage />,
      },
      {
        path: ":type/:slug",
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
          // {
          //   path: "covid",
          //   element: <DestinationCovid />,
          //   errorElement: <ErrorPage />,
          // },
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
