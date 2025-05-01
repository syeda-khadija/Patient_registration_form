import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Register from './Component/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Showdata from './Component/Showdata';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/s' element={<Showdata/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
