
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Flexbox  from "../components/atoms/molecula/FlexBox";


function App() {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
              <Route path='/register' element={<Register/>}   />
              <Route path='/flexbox' element={<Flexbox/>}/>
        </Routes>
        </BrowserRouter>
     );
}

export default App;