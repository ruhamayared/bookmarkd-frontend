import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "../App"
import Index from "../pages/Index"
import Update from "../pages/Update"
import { indexLoader } from "./loaders"
import { updateAction } from "./actions"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Index />} loader={indexLoader} />
      <Route path=":id" element={<Update />} action={updateAction}/>
    </Route>
  )
)

export default router
