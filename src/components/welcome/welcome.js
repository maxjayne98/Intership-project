import React,{Component} from 'react';
import main_picture from '../../images/picture/Back.png';
import './welcome.css'
import { ScrollTo } from "react-scroll-to";

class WelCome extends Component{
    constructor(props){
        super(props);
        this.state={
            animation:false,
            test:false
        }
    }
    render(){
        return(
            <div className="org">
                <img 
                    className="background1" 
                    alt = "1"
                    src = {main_picture}
                    />
                <div className="container">
                    <div className="logo-text-container">
                        <text className="welcome-text">
                            Willkommen bei der DEVG!
                            <br/>
                            Deutsche Energie Versorgung GmbH & Co. KG
                        </text>
                    </div>

                    <div className="scroll-botton-container" >
                        <ScrollTo>
                          {({ scrollTo }) => (
                               <text className="text-style" 
                                onClick={() => { scrollTo({y: 950,smooth:true,duraion:'5s'})}}>scroll</text>
                              )} 
                               
                        </ScrollTo>
                        <div className="vertical-line"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default WelCome;