import { Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <About />
    </div>
  );
}

export default App;
