import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "../App"
import Index from "../pages/Index"
import { indexLoader } from "./loaders"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Index />} loader={indexLoader} />
    </Route>
  )
)

export default router
