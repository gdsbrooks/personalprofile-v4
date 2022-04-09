import About from "./About" 
import Contact from "./Contact"
import Portfolio from './Portfolio'
import Experience from './Experience'

const sections = 
[
    { 
        name: "about",
        component: <About/>
        
}, 

    { 
        name: "experience",
        component: <Experience/>
    }, 

    { 
        name: "portfolio",
        component: <Portfolio/>

    }, 

    { 
        name: "contact",
        component: <Contact/>
    }
]

export default sections