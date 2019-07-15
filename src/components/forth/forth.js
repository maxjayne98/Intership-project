import React, {Component} from 'react';
import network_logo from '../../images/icon/share.svg';
import collaboration from '../../images/icon/collaboration.svg';
import sun from '../../images/icon/sunny.svg';
import tree from '../../images/icon/tree.svg';
import { ScrollTo } from "react-scroll-to";
import './forth.css';
const temp = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially"
class Forth extends Component{
      render(){
        return(
            <div className ="container4">
                <div className="first-details">
                    <img className="network-logo" alt="network" src={network_logo}/>
                    <div className="vertical-line"></div>
                    <div className="text-container">
                        <text className="forth-texttt-one-one"></text>
                        <text className="forth-texttt-one">{temp}</text>
                        <text className="forth-texttt-second">{temp}</text>
                        <text className="forth-texttt-third">{temp}</text>
                        
                    </div>
                </div>

                <div className="second-details">
                    <div className="logo-container">

                        <div  className="forth-logo-container">
                            <img className="forth-logo" alt="network" src={collaboration}/>    
                        </div>

                        <div className="forth-logo-container">
                            <img className="forth-logo" alt="network" src={sun}/>
                        </div>

                        <div className="forth-logo-container">
                            <img className="forth-logo" alt="network" src={tree}/>
                        </div>
                        
                    </div>
                    <div className="under-logoes-text-container">
                        <div  className="forth-logo-container">
                            <text className="forth-textes"> Storm aus Dirketvermarktung? <br/> So machen wir das.</text>
                        </div>

                        <div  className="forth-logo-container">
                            <text className="forth-textes">Guten Greunden gibt man solaren <br/> Storm: Kunde Wirbt Kunde</text>
                        </div>

                        <div  className="forth-logo-container">
                            <text className="forth-textes">Planet-for-Planet <br/> Vom Schulreferat zur globalen Bewegung</text>
                        </div>
                    </div>
                    <div className="forth-scroll-botton-container" >
                        <ScrollTo>
                          {({ scrollTo }) => (
                              <text className="text-style" 
                                onClick={() => scrollTo({y: 3800,smooth:true })}>scroll</text>
                              )}
                        </ScrollTo>
                        <div className="forth-vertical-line"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Forth;