import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

import Blogs1 from './pages/Blogs1';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import Footer from './pages/Footer';
import Home1 from './pages/Home1';
import Readmore1 from './pages/Readmore1';
import Readmore2 from './pages/Readmore2';
import Readmore3 from './pages/Readmore3';
import Readmore4 from './pages/Readmore4';
import Readmore5 from './pages/Readmore5';
import Readmore6 from './pages/Readmore6';
import Read_More0 from './pages/Read_More0';
import Read_More1 from './pages/Read_More1';
import Read_More2 from './pages/Read_More2';
import Read_More3 from './pages/Read_More3';
import Read_More4 from './pages/Read_More4';
import Read_More5 from './pages/Read_More5';
import Read_More6 from './pages/Read_More6';
import Read_More7 from './pages/Read_More7';
import Read_More8 from './pages/Read_More8';



function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Blogs1' element={<Blogs1/>}/>
        
          <Route path='/Contact' element={<Contact/>}/>
          
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Home1' element={<Home1/>}/>
          <Route path='/Readmore1' element={<Readmore1/>}/>
          <Route path='/Readmore2' element={<Readmore2/>}/>
          <Route path='/Readmore3' element={<Readmore3/>}/>
          <Route path='/Readmore4' element={<Readmore4/>}/>
          <Route path='/Readmore5' element={<Readmore5/>}/>
          <Route path='/Readmore6' element={<Readmore6/>}/>
          <Route path='/Read_More0' element={<Read_More0/>}/>
          <Route path='/Read_More1' element={<Read_More1/>}/>
          <Route path='/Read_More2' element={<Read_More2/>}/>
          <Route path='/Read_More3' element={<Read_More3/>}/>
          <Route path='/Read_More4' element={<Read_More4/>}/>
          <Route path='/Read_More5' element={<Read_More5/>}/>
          <Route path='/Read_More6' element={<Read_More6/>}/>
          <Route path='/Read_More7' element={<Read_More7/>}/>
          <Route path='/Read_More8' element={<Read_More8/>}/>
          
          
          

        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;














