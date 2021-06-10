import React from 'react'
import './DownArrow.css'
import  { scroller} from "react-scroll";


const goToContainer = ({container, offset}) => {
    scroller.scrollTo(container,{
        duration: 500,
        smooth: true,
        offset: offset, // Scrolls to element + 50 pixels down the page
      });
}
const DownArrow = (props) => {
return (
    <div className="center-con" >
        <div className="round" onClick={() => goToContainer(props)}>
            <div id="cta" >
                <span className="arrow primera next "></span>
                <span className="arrow segunda next "></span>
            </div>
        </div>
    </div>
)
}

export default DownArrow