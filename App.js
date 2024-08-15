import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Home2 from './pages/home.js'
import Home from './pages/home2.js'
import Store from './pages/store.js';
import News from './pages/news.js';
import Login from './pages/login.js';
import Register from './pages/register.js' 
import Landing from './pages/landing.js'
import Stream from './pages/stream1.js'
import Stream2 from './pages/stream2.js'
function App() {
  return (<>
    <Router>
    <div>
<Routes>
<Route path='/' element={<Landing/>}/>
<Route path='/home2' element={<Home2/>}/>
<Route path='/home' element={<Home/>}/>
  <Route path='/store' element={<Store/>} />
  <Route path='/news' element={<News/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/stream' element={<Stream/>}/>
  <Route path='/stream2' element={<Stream2/>}/>
  </Routes>
    </div>
    </Router>
   
  </>
  );
}

export default App;
