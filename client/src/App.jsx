import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './App.scss'
import Mainlayout from './layout/mainlayout';
import Home from './pages/home';
import Admin from './pages/admin';

function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Mainlayout></Mainlayout>}  path="/">
              <Route element={<Home></Home>}  index ></Route>
              <Route element={<Admin></Admin>}  path='/admin' ></Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>

    </>
  )
}

export default App
