import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import Counter from './components/Counter';
import Features from './components/Features';
import Features1 from './components/Features1';
import First from './components/First';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import ScreenShot from './components/ScreenShot';
import Second from './components/Second';

function App() {
  return (
    <>
      <Navbar />
      <First />
      <Second />
      <Offers />
      <About />
      <Counter />
      <Features />
      <Features1 />
      <ScreenShot />
      <Blogs />
    </>
  );
}

export default App;
