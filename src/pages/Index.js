import { Form, useLoaderData } from "react-router-dom"
import Pen from "../components/img/pen.png"
import Trashcan from "../components/img/trashcan.png"

function Index(props) {
  const bookmarks = useLoaderData()

  return (
    <div>
      <h2>Add a Bookmark</h2>
      <Form action="/create" method="post">
        <input type="input" name="title" placeholder="Site title" />
        <input type="input" name="url" placeholder="Site URL" />
        <input type="submit" value="Add a Bookmark" />
      </Form>

      <h2>Bookmarks</h2>
      <div className="container">
        {bookmarks.map((bookmark) => (
          <div className="bookmark">
            <a href={bookmark.url} target="_blank" rel="noreferrer">
              <h1>{bookmark.title}</h1>
            </a>
            <div className="icons">
              <img className="pen" src={Pen} alt="pen"/>
              <img className="trashcan" src={Trashcan} alt="trashcan"/>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Index
