import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import { Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Login</Link>
      <Link exact to='/'>Home</Link>

      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={SignUp}/>
    </div>
  );
}

export default App;
