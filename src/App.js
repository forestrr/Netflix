import NavBar from './components/NavBar/NavBar';
import React from 'react';
import "./app.css"
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {action,orginal,comedy, documentaries, horror} from './urls'


function App() {

  return (<div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={orginal}title="Netflix Orginals"/>
    <RowPost url={action}title="Action" isSmall/>
    <RowPost url={comedy}title="Comedy" isSmall/>
    <RowPost url={documentaries}title="Romance" isSmall/>
    <RowPost url={horror}title="Horror" isSmall/>
  </div>
   
  
  );
}

export default App;
