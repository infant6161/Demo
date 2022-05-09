
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import History from './components/History/History';
import Home from './components/Home/Home';
import Navabar from './components/Navbar/Navbar';
import Rocket from './components/Rocket/Rocket';
import Launches from "./components/Launches/Launches"



function App(props) {
  return (
    
        <BrowserRouter>
        <Navabar />
        <Routes>
          <Route path="/">
          <Route index element ={<Home/>}/>
          <Route path="/history" element={<History />} />
          <Route path="/rocket"  element={<Rocket />} />
          <Route path="/launches"  element={<Launches/>} />
          </Route>
        </Routes>
        </BrowserRouter>
         
     
    
  );
}

export default App;
