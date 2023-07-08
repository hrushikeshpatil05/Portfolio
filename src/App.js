// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
// import Projects from "./Components/Projects";
// function App() {
//   const typed = select('.typed')
//   if (typed) {
//     let typed_strings = typed.getAttribute('data-typed-items')
//     typed_strings = typed_strings.split(',')
//     new Typed('.typed', {
//       strings: typed_strings,
//       loop: true,
//       typeSpeed: 100,
//       backSpeed: 50,
//       backDelay: 2000
//     });
//   }
//   return (
//     <div className="App">
//       <Navbar/>
//      <Header/>
//      <Projects/>
//      <Footer/>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

export default class App extends Component {

  typed = (e) => {
   e.preventDefault();
   
  }
  render() {
    return (
      <div>
       <Navbar/>
       <Header/>
       <Projects/>
       <Footer/>
      </div>
    )
  }
}

