import { Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import NotFound from './NotFound';
import { BrowserRouter, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
