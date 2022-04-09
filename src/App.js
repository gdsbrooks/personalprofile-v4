import { Toolbar, Container } from '@mui/material';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';

import TopBar from './components/TopBar';

function App() {
   
  return (
    <div className="App">
    
   <TopBar/>
   <Toolbar/>
   <Container maxWidth='md'>
   <About/>
   {/* <Contact/> */}
   </Container>
x
     
    </div >
  );
}

export default App;
