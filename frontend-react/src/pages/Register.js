import { useState } from "react";
import { Form, Input, Button, Typography } from 'antd';

function Register() {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (values) => {
    // console.log(values)
    // setFirstName(values.firstName)
    // setLastName(values.lastName)
    // setEmail(values.email)
    // setPassword(values.password)

    // console.log(firstName)

    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password
    }

    if (!values.firstName || !values.lastName || !values.email || !values.password || !values.confirm) {
      setError('Please fill out all fields')
    } else if (values.password !== values.confirm) {
      setError('Passwords do not match!')
    } else {
      const res = await fetch('http://localhost:8081/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(user),
      })

      const returnData = await res.json()

      if (res.ok) {
        setError('')
        console.log("Success! User registered!")
      } else {
        let errors = ''
        if (returnData.error) {
          errors = returnData.error
        } else {
          for (let i = 0; i < returnData.msg.length; i++) {
            errors += returnData.msg[i].param[0].toUpperCase() + returnData.msg[i].param.slice(1) + ' ' + returnData.msg[i].msg + '\n'
          }
        }
        setError(errors)
      }
    }
  }

  const { Title, Text } = Typography;
  return(
    <>
      <Title style={{textAlign: 'center'}}>Register</Title>
      <Form
        name="basic"
        style={{maxWidth: '50%', margin: 'auto'}}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Form.Item 
          label="First Name"
          name="firstName"
          required
        >
        <Input />
        </Form.Item>
        <Form.Item 
          label="Last Name"
          name="lastName"
          required
        >
        <Input />
        </Form.Item>
        <Form.Item 
          label="E-mail"
          name="email"
          required
        >
        <Input />
        </Form.Item>

        <Form.Item 
          label="Password"
          name="password"
          required
        >
        <Input.Password />
        </Form.Item>

        <Form.Item 
          label="Confirm Password"
          name="confirm"
          required
        >
        <Input.Password />
        </Form.Item>
        { error && <Text style={{whiteSpace: 'pre-wrap'}} type="danger">{ error }</Text> }

        <Form.Item style={{textAlign: 'center'}}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
    </>
  )
}

export default Register;