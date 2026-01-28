import Header from './components/Header/Header';
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Showcase from './components/Showcase/Showcase';
import ProfessionalShowcase from './components/ProfessionalShowcase/ProfessionalShowcase.jsx';
import ProfessionalOverview from "./components/ProfessionalOverview/ProfessionalOverview";
function App() {
  return <>
    <Header />
    <Home />
    <About />
    <ProfessionalOverview />
    <ProfessionalShowcase />
    <Showcase />
    <Contact />
    <Footer />

  </>
}


export default App
