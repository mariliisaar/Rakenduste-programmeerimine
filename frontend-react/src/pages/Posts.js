import { useContext, useRef, useState, useEffect } from "react"
import { Typography, Input, Button, Table } from 'antd';
import { Context } from "../store"
import { addPost, removePost, updatePosts } from "../store/actions"

function Posts() {
  const [title, setTitle] = useState("")
  const [state, dispatch] = useContext(Context)
  const inputRef = useRef(null)

  const { Title } = Typography
  const cols = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Post',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'authorId',
      key: 'authorId',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Last Modified',
      dataIndex: 'lastModified',
      key: 'lastModified',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button key={record.id} type="link" onClick={() => dispatch(removePost(record.id))}>Delete</Button>
      ),
    },
  ]

  // Ilma dependency massiivita - igal renderdusel
  // Tühja massiiviga [] - esimesel korral
  // Saab ka kutsuda teatud state muutustel välja [state] / [title] jne
  useEffect(() => {
    fetch('http://localhost:8081/api/post').then(res => {
      return res.json();
    }).then(async (data) => {
      await dispatch(updatePosts(data))
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPost = {
      title,
      authorId: state.auth.user.id,
    }

    setTitle("")

    addNewPost(newPost)

    if (inputRef.current) inputRef.current.focus()
  }

  const addNewPost = async (post) => {
    const res = await fetch('http://localhost:8081/api/post/create', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(post),
    })

    const returnData = await res.json()

    dispatch(addPost(returnData))
  }

  return(
    <div style={{ textAlign: "center" }}>
      <Title>Posts</Title>
      {state.auth.token &&
        (
          <form onSubmit={handleSubmit}>
            <Input
              style={{margin: '10px', maxWidth: '50%'}}
              ref={inputRef}
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              autoFocus
            />
            <Button htmlType="submit" type="primary">Submit</Button>
          </form>
        )
      }

      <Table columns={cols} dataSource={state.posts.data} rowKey='id' />
    </div>
  )
}

export default Posts