import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './Components';
import Home from './Pages/Home';
import PageA from './Pages/PageA';
import PageB from './Pages/PageB';
import NotFound from './Pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageC from './Pages/PageC';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="page-a" element={<PageA />} />
          <Route path="page-b" element={<PageB />} />
          <Route path="page-c" element={<PageC />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App