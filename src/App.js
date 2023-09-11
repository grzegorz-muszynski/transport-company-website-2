// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery.js';
import Menu from './components/Menu.tsx';
import Order from './components/Order.tsx';
import ThanksPol from './components/ThanksPol.tsx';
import ThanksEng from './components/ThanksEng.tsx';

import './sass/components/About.scss';
import './sass/components/Contact.scss';
import './sass/components/Footer.scss';
import './sass/components/Gallery.scss';
import './sass/components/Menu.scss';
import './sass/components/Order.scss';
import './sass/components/Thanks.scss';
import './sass/components/Slider.scss';
import './sass/helpers/variables.scss';

function App() {

  return (
    <Router>
      <div id="App">
          <Routes>
            <Route exact path='/' element={
              <>
                <Menu language={'pol'} />
                <About language={'pol'} />
                <Gallery language={'pol'} />
                <Contact language={'pol'} />
                <Order language={'pol'} />
                <Footer language={'pol'} />
              </>
            }/>
            <Route exact path='/eng' element={
              <>
                <Menu />
                <About />
                <Gallery />
                <Contact />
                <Order />
                <Footer />
              </>} 
            />
            <Route exact path='/thankspol' element={
              <>
                <ThanksPol />
              </>} 
            />
            <Route exact path='/thankseng' element={
              <>
                <ThanksEng />
              </>} 
            />
          </Routes>
      </div>
    </Router>
  );
}
//   return (
//     <Router>
//       <div id="App">
//           <Routes>
//             <Route exact path='/' element={
//               <>
//                 <Menu language={'pol'} />
//                 <About language={'pol'} />
//                 <Gallery language={'pol'} />
//                 <Contact language={'pol'} />
//                 <Order language={'pol'} />
//                 <Footer language={'pol'} />
//               </>
//             }/>
//             <Route exact path='/eng' element={
//               <>
//                 <Menu />
//                 <About />
//                 <Gallery />
//                 <Contact />
//                 <Order />
//                 <Footer />
//               </>} 
//             />
//           </Routes>
//       </div>
//     </Router>
//   );
// }

export default App;
