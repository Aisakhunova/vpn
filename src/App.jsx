import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features'
import Contact from './components/Contact';
import WhyUs from './components/Features';
import { Curtain } from './components/Curtain';
import { Steps } from './components/Ice';
import FAQ from './components/FAQ';
import { Privacy } from './components/Privacy';
import { Numbers } from './components/Numbers';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Numbers/>
      <WhyUs/>
      
      <Curtain/>
      <Steps/>
      <FAQ/>
      <Privacy/>
      <Contact />
      
    </div>
  );
}

export default App;
