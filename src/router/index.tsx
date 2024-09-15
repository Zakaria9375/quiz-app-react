import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import Root from "../pages/Root";
import Quiz from "../pages/Quiz";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      }, 
      {
        path: "quiz/:quizName",
        element: <Quiz/>,
      }
    ]
  }
])

export default router;