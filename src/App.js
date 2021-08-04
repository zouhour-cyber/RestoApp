import './App.css';
import Dashboard from './Screen/DashboardScreen';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Home from './Screen/HomeScreen';
import AjoutPlat from './Components/AjoutPlat';

function App() {
  return (
    <div className="App">
<Router> 

  <Switch>
    <Route exact path="/"  component={Home}/>
    <Route exact path="/Dashboard"  component={Dashboard}/>
    <Route exact path="/AjoutPlat"  component={AjoutPlat}/>

  </Switch>

</Router>
    </div>
  );
}

export default App;
