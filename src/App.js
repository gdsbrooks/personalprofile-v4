import { Toolbar, Container, Typography } from '@mui/material';
import './App.css';
import About from './components/About';
import Splash from './components/Splash'
import Contact from './components/Contact';
import sections from './components/sections'

import TopBar from './components/TopBar';

function App() {
   
  return (
    <div className="App">
    
   <TopBar/>
   <Container maxWidth='md'>
   <Splash/>

   
   {sections.map((section) => {
     return (
     <section id={section.name}>
     <Typography variant='h3'>{section.name[0].toUpperCase() + section.name.slice(1)}</Typography>
       {section.component}
     </section>
     
     )
   })}
   
   {/* <Contact/> */}
   </Container>
     
    </div >
  );
}

export default App;
