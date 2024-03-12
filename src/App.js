import logo from './logo.svg';
import './App.css';
// --------- IMPORT COMPOMNENTS
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Main } from './Components/Main';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
        <Route path='/' element={<Main/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
