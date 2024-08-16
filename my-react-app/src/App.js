
import './App.css';
import ListEmpresaComponent from './components/ListEmpresaComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import AddEmpresaComponent from './components/AddEmpresaComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ListEmpresaComponent />} ></Route>
            <Route path='/empresa' element={<ListEmpresaComponent />} ></Route>
            <Route path='/add-empresa' element={<AddEmpresaComponent />} ></Route>
            <Route path='/edit-empresa/:id' element={<AddEmpresaComponent />} ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
