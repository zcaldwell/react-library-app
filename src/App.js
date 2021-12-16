import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Route, Switch } from 'react-router-dom';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <p>Check out the amazing selection of books in our</p>
        <NavLink to="/books">Catalog</NavLink>

        <Switch>
          <Route path="/books/:id" component={BookDetail} />
          <Route path="/books" component={BookList} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
