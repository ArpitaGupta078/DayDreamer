
import FrontPage from './components/FrontPage';
import FeatureSection from './components/FeatureSection';
import CreateArtSteps from './components/HowItWorks';
import FeatureHighlights from './components/FeatureHighlights';
import CreateCTA from './components/CreateCTA';
import TestimonialSection from './components/TestimonialSection';
import NavbarComponent from './components/NavbarComponent';
import Pricing from './components/Pricing';
import CuteFAQ from './components/CuteFAQ';
import Footer from './components/footer';
import ImageGenerator from './components/ImageGenerator';



function App() {
  return (
    <div className="App">
     
      <FrontPage />
      <FeatureSection/>
      <CreateArtSteps />
      <FeatureHighlights/>
      <CreateCTA />
      <TestimonialSection/>
      <Pricing/>
      
      
    </div>
  );
}

export default App;
