import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { LandingPage } from './Components/LandingPage';
import { Demo } from './demo';
import { Header2 } from './Components/Header2';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <LandingPage/>
      {/* <Header2/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
