import logo from './logo.svg';
import './App.css';
function Heading(){
  return(
    <h1>Bavanuja Kamalakkannan</h1>
    
  );
}
function Heading2(){
  return(
    <h2>Undergraduate Student</h2>
  )
}
function Heading3(){
  return(
    <h3>About</h3>
     
  )
}
function Body(){
  return(
    <p>I am a motivated and adaptable frontend developer with a strong foundation in HTML, CSS, and JavaScript. Currently, I am enhancing my skills through a comprehensive frontend development course. I am passionate about creating intuitive and engaging user experiences and am eager to contribute my expertise to a dynamic team. With a keen eye for detail and a commitment to continuous learning, I am confident in my ability to deliver high-quality, innovative solutions.

    </p>
  )
}
function Heading4(){
  return(
    <h4>Skills</h4>
     
  )
}
function List1(){
  return(
    <ul>
      <li>Java</li>
      <li>C</li>
      <li>JS</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
     
  )
}


function App() {
  return (
    <div>
    <img src ></img>
   <Heading />
   <Heading2 />
   <Heading3 />
   <Body />
   <Heading4 />
   <List1 />
   </div>
  
   
  );
}


export default App;


