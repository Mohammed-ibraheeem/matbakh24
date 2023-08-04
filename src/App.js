import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import Client from './components/Client';
import Contact from './components/Contact';
import Cook from './components/Cook';
import Counter from './components/Counter';
import Faq from './components/Faq';
import Features from './components/Features';
import Features1 from './components/Features1';
import First from './components/First';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import ScreenShot from './components/ScreenShot';
import Second from './components/Second';
import Moreblogs from './components/Moreblogs';
import Morefaq from './components/Morefaq';

function App() {
  return (
    <>

      <Routes>
        <Route path='' element={
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
            <Cook />
            <Faq />
            <Contact />
            <Client />
            <Footer />
          </>} />
        <Route path='blog' element={<Moreblogs />} />
        <Route path='faq' element={<Morefaq />} />
      </Routes>
    </>
  );
}

export default App;
