import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

function App() {
  return(
    <>
    <Navbar/>
    <main>
      <Home />
       <Skills />
       <Projects/>
       <Certificates/>
       <Contact/>
    </main>
    </>
  )
}

export default App
