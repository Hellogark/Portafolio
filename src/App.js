import {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import FullpageWrapper from './components/FullPageWrapper';
function App() {

    useEffect(() => {
      window.addEventListener('scroll', (e) => {
        console.log(e);
      })
    }, [])

  return (
    
    <div className="container" >
      <Navbar/>

      <FullpageWrapper/>
    </div>
  );
}

export default App;
