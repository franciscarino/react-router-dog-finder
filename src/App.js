import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList.js';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
