import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './picture/index';

// const header = <h1>Hello react</h1>
// const image = <img height="200" width="300" src="https://static.toiimg.com/thumb/58515713/Nice-in-pictures.jpg?width=748&height=499"></img>
// const navbar = ["HOME","ABOUT","CONTACT US"]
// const images = ["https://pix10.agoda.net/geo/city/318/1_318_02.jpg?s=1920x822", "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY1MTc1MTk3ODIzOTM2MDcz/topic-statue-of-liberty-gettyimages-960610006-feature.jpg", "https://i.ytimg.com/vi/hVTXu8SgVyE/maxresdefault.jpg"]



function App() {
  return (
    <div className="App">
    {/* {header}  
    {image}
    <br/>
    {navbar.map(button => <button>{button}</button>)}
    {images.map(image => <img height="100" width="150" src={image}></img>)} */}

    <Image/>


    </div>



  );
}

export default App;
