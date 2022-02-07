import { Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import api from '../utils/api';
import Blog from './Blog';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <About />
      <Blog />
    </div>
  );
}

export default App;
