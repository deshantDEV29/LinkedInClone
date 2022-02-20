
import './App.css';
import Header from './headercomponent/Header';
import Home from './homecomponent/Home';
import Network from './networkcomponent/Network';
import {  BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/network' element={<Network/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
