import React from 'react';
import  HomeComponent  from './components/Home/home';
import ColorTherapy from './components/ColorTherapy/ColorTherapy';
import SoundTherapy from './components/SoundTherapy/SoundTherapy';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<HomeComponent/>} />
          <Route path='/colortherapy' element={<ColorTherapy />} />
          <Route path='/soundtherapy' element={<SoundTherapy />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
