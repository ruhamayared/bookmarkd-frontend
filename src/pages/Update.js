import { useLoaderData, Form } from "react-router-dom"
import "../styles/update-page.scss"

function Update(props) {
  const bookmark = useLoaderData()

  return (
    <div className="update-container">
      <div className="update">
      <h2>Update {bookmark.title}:</h2>
      <Form action={`/update/${bookmark._id}`} method="post">
        <input defaultValue={bookmark.title} type="input" name="title" placeholder="Site title" className="update-input" />
        <input defaultValue={bookmark.url} type="input" name="url" placeholder="Site url" className="update-input"/>
        <input type="submit" value={`Update ${bookmark.title}`} className="update-input"/>
      </Form>
      </div>
    </div>
    
  )
}

export default Update
