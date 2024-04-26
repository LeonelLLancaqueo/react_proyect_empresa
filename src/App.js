
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./Screens/Home/Home.js"

function App() {
  return (
    <div>
        <BrowserRouter>
          <div className="continer"> 
            <Routes>
                <Route exact path='/' element={<Home/>}> </ Route>
                <Route exact path='/personas' element={<Home/>}> </ Route>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
