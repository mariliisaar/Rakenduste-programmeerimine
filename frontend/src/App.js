import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AddItem from './pages/AddItem';
import CategoryListView from './pages/CategoryListView';
import AddCategory from './pages/AddCategory';
import AdminHome from './pages/AdminHome';
import Navbar from './components/Navbar';
import SingleItem from './pages/SingleItem';
import EditItem from './pages/EditItem';

function App() {
  return (
    <div>
      <Navbar />
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/add-item'>
        <AddItem />
      </Route>
      <Route path='/categories'>
        <CategoryListView />
      </Route>
      <Route path='/add-category'>
        <AddCategory />
      </Route>
      <Route path='/item/:itemId'>
        <SingleItem />
      </Route>
      <Route path='/edit-item/:itemId'>
        <EditItem />
      </Route>
      <Route path='/admin'>
        <AdminHome />
      </Route>
    </div>
  );
}

export default App;
