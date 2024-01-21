import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert(
      {
        message: message,
        type: type
      }
    );
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  
  const toggleMode = () => {
    if (mode==='light'){
      setmode('dark');
      document.body.style.background = 'black';
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setmode('light');
      document.body.style.background = 'white';
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="My App" about="About My App" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/" element={<Textform heading = "Enter Text Here" mode={mode} showAlert={showAlert}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
