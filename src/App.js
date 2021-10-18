import {Switch, Route, Link} from "react-router-dom"
import './App.css';
import './componets/Movies'
import Movies from './componets/Movies';
import Login from "./componets/Login";


function App() {
  return (
      <div className="container">
              <div className="App">


<ul className="app-navigation">
  <li><Link to="/">Login</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/movies">Movies</Link></li>
</ul>
<Switch>
  
  <Route path="/movies">
    <Movies />
  </Route>
  <Route path="/" render={(props)=> <Login {...props} />}>
    
  </Route>
</Switch>



</div>
      </div>
  );
}

export default App;
