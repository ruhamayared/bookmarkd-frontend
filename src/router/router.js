import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "../App"
import Index from "../pages/Index"
import Update from "../pages/Update"
import { indexLoader } from "./loaders"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Index />} loader={indexLoader} />
      <Route path=":id" element={<Update />} />
    </Route>
  )
)

export default router
