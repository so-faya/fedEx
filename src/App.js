import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <Home/>
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route index element={<Home/>} /> */}
          {/* <Route path="/Home" element={<Home />} /> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
