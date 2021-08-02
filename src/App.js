import NavBar from './components/NavBar/NavBar';
import React from 'react';
import "./app.css"
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';


function App() {
  return (<div className="App">
    <NavBar/>
    <Banner/>
    <RowPost/>
  </div>
   
  
  );
}

export default App;
