import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { Context } from "../store";
import { logoutUser } from '../store/actions';

function Header() {
  const [current, setCurrent] = useState(window.location.pathname.replace('/', ''))
  const [state, dispatch] = useContext(Context)

  const handleLogout = () => {
    dispatch(logoutUser)
  }

  return(
    <Menu theme="dark" mode="horizontal" selectedKeys={[current]}>
      <Menu.Item key={''} onClick={e => setCurrent(e.key)}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key={'posts'} onClick={e => setCurrent(e.key)}>
        <Link to="/posts">Posts</Link>
      </Menu.Item>
      {state.auth.token &&
        (
          <Menu.Item key={'logout'} onClick={e => setCurrent(e.key)}>
            <Link to="#" onClick={handleLogout}>Logout</Link>
          </Menu.Item>
        )
      }
      {!state.auth.token &&
        (
          <>
            <Menu.Item key={'login'} onClick={e => setCurrent(e.key)}>
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key={'register'} onClick={e => setCurrent(e.key)}>
              <Link to="/register">Register</Link>
            </Menu.Item>
          </>
        )
      }
    </Menu>
  )
}

export default Header;