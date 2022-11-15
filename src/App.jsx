import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
  <>
    <Home />
    <div id="container">
      <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/register' element={<Register/>} ></Route>
      </Routes>
    </div>
  </>
  );
}

export default App;
