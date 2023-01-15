const URL = "https://bookmarkd-backend-hhwq.onrender.com"

export const indexLoader = async () => {
  const response = await fetch(URL + "/bookmarks")
  const bookmarks = await response.json()
  return bookmarks
}

export const updateLoader = async ({ params }) => {
  const response = await fetch(URL + "/bookmarks/" + params.id)
  const bookmark = await response.json()
  return bookmark
}
