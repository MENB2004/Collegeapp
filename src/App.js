import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Gallery from './components/Gallery';
import Conatct from './components/Conatct';

function App() {
  return (
    <div>
      <Homepage/>
      <About/>
      <Gallery/>
      <Conatct/>
    </div>
  );
}

export default App;
