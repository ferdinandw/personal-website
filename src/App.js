import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Footer from './Component/Footer'
import Copyright from './Component/Copyright'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
