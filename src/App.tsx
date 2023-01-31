import Header from "./components/common/Header";
import { Routes, Route } from 'react-router-dom';
import MainHooks from './components/hooks/MainHooks';
import Home from './components/common/Home';
//"Centralizado de items"
function App() {
  return (
    <div className='aling-items-center'>
      <Header />
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/hooks' element={ <MainHooks/> } />
        </Routes>
    </div>
  );
}

export default App;
