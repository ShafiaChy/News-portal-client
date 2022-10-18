import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../src/Pages/Layout/Main/Main";
import Home from "./Pages/Home/Home/Home";
import News from "./Pages/News/News";
import PrivateRoute from "./components/PrivateRoute.js/PrivateRoute";
import Login from "./components/Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () =>
            fetch(
              "https://news-portal-server-c97ua2fk2-shafiachy.vercel.app/news-category/01"
            ),
          element: <Home></Home>,
        },
        {
          path: "/login",
          
          element: <Login></Login>,
        },
        {
          path: "/:id",
          loader: async ({ params }) =>
            fetch(
              `https://news-portal-server-c97ua2fk2-shafiachy.vercel.app/news-category/${params.id}`
            ),
          element: <Home></Home>,
        },
        {
          path: "/news/:id",
          loader: async ({ params }) =>
            fetch(
              `https://news-portal-server-c97ua2fk2-shafiachy.vercel.app/news-details/${params.id}`
            ),
          element: <PrivateRoute><News></News></PrivateRoute>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
