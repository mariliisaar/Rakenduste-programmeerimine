import { useContext, useRef, useState, useEffect } from "react"
import { Context } from "../store"
import { addPost, removePost, updatePosts } from "../store/actions"

function Posts() {
  const [title, setTitle] = useState("")
  const [state, dispatch] = useContext(Context)
  const inputRef = useRef(null)

  // Ilma dependency massiivita - igal renderdusel
  // Tühja massiiviga [] - esimesel korral
  // Saab ka kutsuda teatud state muutustel välja [state] / [title] jne
  useEffect(() => {
    dispatch(updatePosts([
      {
        id: 1,
        title: "Test-prefetched-array-1"
      },
      {
        id: 2,
        title: "Test-prefetched-array-2"
      },
      {
        id: 3,
        title: "Test-prefetched-array-3"
      },
    ]))
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    setTitle("")

    addNewPost()

    if (inputRef.current) inputRef.current.focus()
  }

  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      title // === title: title
    }

    // Save to database, if successful => dispatch and update locally

    dispatch(addPost(newPost))
  }

  return(
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>

        { state.posts.data.map((element, index) => 
          <li key={element.id}>
            {index + 1}. {element.id} {element.title}
            <span
              style={{cursor: "pointer"}}
              onClick={() => dispatch(removePost(element.id))}
            >
                &#128540;
            </span>
          </li>
        )}
    </div>
  )
}

export default Posts