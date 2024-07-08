// App.js
import React from 'react';
import Nav from './Components/Nav';
import Promo from './Components/Promo';
import Intro1 from './Components/Intro1';
import Intro2 from './Components/Intro2';
import Intro3 from './Components/Intro3';
import Footer from './Components/Footer';
import Bag from './Components/Bag';
import Apples from './Components/Apples';
import Pears from './Components/Pears';


function App() {
   return (
    <div className="App">
      <Nav name="guys" color="purple" first="About" second="Articles" third="News" fourth="Contact"/>
      <Promo note="Good deal"/>
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
      <Bag children={<Apples color="yellow" number="5" />} />
      <Bag children={<Pears friend="Peter" />} />
    </div>
  );
}

export default App;
