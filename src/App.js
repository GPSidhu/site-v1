import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages'
import Blog from './pages/blog'
import Resume from './pages/resume'
import { ThemeProvider } from 'styled-components'
import {
  Dark,
} from './constants/colors'

const theme = {
  main: Dark,
}

function App() {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <Route path="/" component={Home} exact></Route>
          <Route path="/resume" component={Resume} exact></Route>
          <Route path="/blog" component={Blog} exact></Route>
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
