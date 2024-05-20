import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { LandingPage } from './Components/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <LandingPage/>
    </div>
    </BrowserRouter>
  );
}

export default App;
