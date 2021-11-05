import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import { default as PageHeader } from "./components/Header";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import "antd/dist/antd.css";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <BrowserRouter>
      <Layout className="layout" style={{height: '100%'}}>
        <Header>
          <Route path="/" component={PageHeader} />
        </Header>
        <Content style={{padding: '50px'}}>
          <div style={{background: '#fff', height: '100%', padding: '20px'}}>
            <Switch>
              <Route exact path="/" component={ShowMagic} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </Content>
        <Footer theme="dark" style={{textAlign: 'center'}}>Marilii Kodutöö</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
