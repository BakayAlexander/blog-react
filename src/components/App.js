import { Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import NotFound from './NotFound';
import { BrowserRouter, Redirect } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
          <Route exact path={process.env.PUBLIC_URL + '/blog'} component={Blog} />
          <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
