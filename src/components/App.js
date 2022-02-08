import { Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import api from '../utils/api';
import Blog from './Blog';
import Contact from './Contact';
import NotFound from './NotFound';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
