import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './App.scss'
import Mainlayout from './layout/mainlayout';
import Home from './pages/home';
import Admin from './pages/admin';
import Profil from './pages/profil';
import Register from './pages/register';
import Login from './pages/login';
import Shop from './pages/shop';
import Basket from './pages/basket';
import Detail from './pages/detail';
import Wish from './pages/wish';
import Contact from './pages/contact';
import About from './pages/about';
import Error from './pages/error';

function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Mainlayout></Mainlayout>}  path="/">
              <Route element={<Home></Home>}  index ></Route>
              <Route element={<Admin></Admin>}  path='/admin' ></Route>
              <Route element={<Profil></Profil>}  path='/profil' ></Route>
              <Route element={<Register></Register>}  path='/register' ></Route>
              <Route element={<Login></Login>}  path='/login' ></Route>
              <Route element={<Shop></Shop>}  path='/shop' ></Route>
              <Route element={<Basket></Basket>}  path='/basket' ></Route>
              <Route element={<Wish></Wish>}  path='/wish' ></Route>
              <Route element={<Contact></Contact>}  path='/contact' ></Route>
              <Route element={<About></About>}  path='/about' ></Route>
              <Route element={<Detail></Detail>}  path='/detail/:id' ></Route>

            </Route>
              <Route element={<Error></Error>}  path='*' ></Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>

    </>
  )
}

export default App
