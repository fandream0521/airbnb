import { lazy } from "react"
import { Navigate } from "react-router-dom"

const Home = lazy(() => import("@/views/home/Home"));
const Detail = lazy(() => import("@/views/detail/Detail"));
const Entire = lazy(() => import("@/views/entire/Entire"));

const routes = [
  {
    path: "",
    element: <Navigate to="home" />
  },
  {
    path: 'home',
    element: <Home />
  },
  {
    path: 'detail',
    element: <Detail />
  },
  {
    path: 'entire',
    element: <Entire />
  }
]


export {
  routes
}