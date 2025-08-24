import React from 'react';
import Dashboard from '../Dashboard';
import Footer from '../Footer/Footer';


function App(props) {
  return (
   
   <> 
   <Dashboard {...props}/>
    <Footer/>
    </>
  );
}

export default App;
