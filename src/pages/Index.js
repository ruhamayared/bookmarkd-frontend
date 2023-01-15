import { Form, useLoaderData } from "react-router-dom"
// import Pen from "../components/img/pen.png"
// import Trashcan from "../components/img/trashcan.png"

function Index(props) {
  const bookmarks = useLoaderData()

  function edit(){
    alert("Edit")
  }

  function deleted(){
    alert("Deleted")
  }

  return (
    <div>
      <div className="add">
        <h2>Add a Bookmark:</h2>
        <Form action="/create" method="post">
          <input type="input" name="title" placeholder="Site title" />
          <input type="input" name="url" placeholder="Site URL" />
          <input type="submit" value="Add a Bookmark" />
        </Form>
      </div>

      <div className="container">
        <h1>Bookmarks</h1>
        {bookmarks.map((bookmark) => (
          <div className="bookmark">
            <a href={bookmark.url} target="_blank" rel="noreferrer">
              <h2>{bookmark.title}</h2>
            </a>
            <div className="icons">
              <button className="bPen" onClick={edit}></button>
              <button className="trashCan" onClick={deleted}></button>
              {/* <img className="pen" src={Pen} alt="pen" onClick={edit} />
              <img className="trashcan" src={Trashcan} onClick={deleted} alt="trashcan" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
