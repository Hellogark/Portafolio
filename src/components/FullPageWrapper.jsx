
import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './Home/Home';
const tags = ['home', 'projects', 'about', 'contact'];
const FullpageWrapper = ({props}) => (

     <ReactFullpage
      anchors={tags}
      navigation
      navigationTooltips={tags}
    licenseKey= 'OPEN-SOURCE-GPLV3-LICENSE'

      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={function ({  state, fullpageApi}) {
        // eslint-disable-line no-console  
        return (
            <ReactFullpage.Wrapper>
                <Home/>
            </ReactFullpage.Wrapper>
        );
      }}
     /> 
    
  );

  export default FullpageWrapper