import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "../App"
import Index from "../pages/Index"
import Update from "../pages/Update"
import { indexLoader, updateLoader } from "./loaders"
import { updateAction, deleteAction } from "./actions"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Index />} loader={indexLoader} />
      <Route path=":id" element={<Update />} loader={updateLoader} />
      <Route path="update/:id" action={updateAction} />
      <Route path="delete/:id" action={deleteAction} />
    </Route>
  )
)

export default router
