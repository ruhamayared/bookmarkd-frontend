const URL = "https://bookmarkd-backend-hhwq.onrender.com"

export const indexLoader = async () => {
  const response = await fetch(URL + "/bookmarks")
  const bookmarks = await response.json()
  return bookmarks
}
