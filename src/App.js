import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HeroSlider from "./components/HeroSlider";
import Categories from "./components/Categories";
import Favorite from "./components/Favorite";
import ArrivalSlider from "./components/ArrivalsCarousel"
import Instagram from './components/Instagram';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {

  return (
    <div>
     <Banner />
     <Navbar />
     <HeroSlider />
     <Categories />
     <ArrivalSlider />
     <Favorite />
     <Instagram />
     <Signup />
     <Footer />
    </div>
  );
}

export default App;
