import { useContext, useRef, useState } from "react"
import { Context } from "../store"
import { addPost } from "../store/actions"

function Posts() {
  const [title, setTitle] = useState("")
  const [state, dispatch] = useContext(Context)
  const inputRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      title // === title: title
    }

    dispatch(addPost(newPost))

    setTitle("")

    if (inputRef.current) inputRef.current.focus()
  }

  return(
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" value={title} onChange={e => setTitle(e.target.value)} autoFocus />
        <button type="submit">Submit</button>
      </form>

        { state.posts.data.map((element, index) => <li key={element.id}>{index + 1}. {element.id} {element.title}</li>) }
    </div>
  )
}

export default Posts