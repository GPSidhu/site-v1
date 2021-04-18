import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages'
import Blog from './pages/blog'
import Resume from './pages/resume'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/resume" component={Resume} exact></Route>
        <Route path="/blog" component={Blog} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
