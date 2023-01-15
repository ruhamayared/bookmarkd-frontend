import { useLoaderData, Form } from "react-router-dom"

function Update(props) {
  const bookmark = useLoaderData()

  return (
    <div className="update">
      <h2>Update {bookmark.title}:</h2>
      <Form action={`/update/${bookmark._id}`} method="post">
        <input defaultValue={bookmark.title} type="input" name="title" placeholder="Site title" />
        <input defaultValue={bookmark.url} type="input" name="url" placeholder="Site url" />
        <input type="submit" value={`Update ${bookmark.title}`} />
      </Form>
    </div>
  )
}

export default Update
