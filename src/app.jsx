import { Navbar } from './Components/Navbar/Navbar'
// import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home/Home'
import { About } from './Components/About/About'
import { Skills } from './Components/Skills/Skills'
import { Project } from './Components/Project/Project'
import { Footer } from './Components/Footer/Footer'
import './app.css'

const siteProps = {
name:"Surendrpalsingh Jhiout",
title:"Software Engineer",
email:"surendrapalsingh.jhiout@gmail.com",
github:"SurendraSingh97",
linkedIn: "surendrapalsingh-jhiout-283254183",
}

export function App() {

  return (
    <div id='main' className=' w-screen '>
      <Navbar />
      <Home name={siteProps.name} title={siteProps.title} linkedIn={siteProps.linkedIn} />
      <About />
      <Skills />
      <Project />
      <Footer
        name={siteProps.name}
        email={siteProps.email}
        github={siteProps.github}
        linkedIn={siteProps.linkedIn}
        />
    </div>
  )
}
