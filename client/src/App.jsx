import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './App.scss'
import Mainlayout from './layout/mainlayout';
import Home from './pages/home';
import Admin from './pages/admin';
import Profil from './pages/profil';
import Register from './pages/register';
import Login from './pages/login';

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

            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>

    </>
  )
}

export default App
