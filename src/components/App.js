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
          <Route exact path="/blog-react" component={() => <Redirect to="/" />} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
