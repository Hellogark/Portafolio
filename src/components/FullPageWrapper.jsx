
import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
const tags = ['home', 'projects', 'about', 'contact'];
const FullpageWrapper = ({props}) => (

     <ReactFullpage
      anchors={tags}
      navigation
      navigationTooltips={tags}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={function ({  state, fullpageApi}) {
        // eslint-disable-line no-console  
        return (
            <ReactFullpage.Wrapper>
               <Home  className="section-area"id="home"/>
                <About className="section-area" id="about"/>
                <Projects className="section-area" id="projects"/>
                <Contact className="section-area" id="contact"/>
            </ReactFullpage.Wrapper>
        );
      }}
     /> 
    
  );

  export default FullpageWrapper