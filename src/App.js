import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/Home';
import 'antd/dist/antd.css';
import MovieDetail from './components/MovieDetail';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/detail/movie/:id' exact>
          <MovieDetail />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
