import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DestinationDetailPage } from "../pages/DestinationDetailPage";
import { DestinationInformation } from "../components/DestinationDetailPage/DestinationInformation";
import { DestinationReview } from "../components/DestinationDetailPage/DestinationReview";
import { DestinationCovid } from "../components/DestinationDetailPage/DestinationCovid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/destination/:destinationName/",
    element: <DestinationDetailPage />,
    children: [
      {
        path: "information",
        element: <DestinationInformation />,
      },
      {
        path: "review",
        element: <DestinationReview />,
      },
      {
        path: "covid",
        element: <DestinationCovid />,
      },
    ]
  },
]);

export default router;