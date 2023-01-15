import { redirect } from "react-router-dom"

const URL = "https://bookmarkd-backend-hhwq.onrender.com"

// Update Action
export const updateAction = async ({ request, params }) => {
  const formData = await request.formData()

  const updatedBookmark = {
    title: formData.get("title"),
    url: formData.get("url"),
  }

  await fetch(URL + "/bookmarks/" + params.id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedBookmark),
  })
  return redirect("/")
}

// Delete Action
export const deleteAction = async ({ params }) => {
  await fetch(URL + "/bookmarks/" + params.id, {
    method: "delete",
  })
  return redirect("/")
}
