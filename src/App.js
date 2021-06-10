import {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import generarStore from './redux/store';
import {Provider} from 'react-redux';
function App() {
  const store = generarStore();
  return (
    <Provider store={store}>
      <div className="container" id="wrapper" >
          <Navbar/>
            <Home  className="section-area" />
            <About className="section-area" />
            <Projects className="section-area"/>
            <Contact className="section-area"  />
      </div>
    </Provider>
  );
}

export default App;
