import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom'
import { Views } from './views';

function App() {
  return (
    <Router>
      <div className="App">
      <Views/> 
      </div>
    </Router>
  );
}
  

export default App;
