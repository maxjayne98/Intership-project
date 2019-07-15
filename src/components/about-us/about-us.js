import React,{Component} from 'react';
import main_photo from '../../images/picture/Back-image-about-us.jpg'
import twitter from '../../images/icon/twitter.svg'
import facebook from '../../images/icon/facebook.svg'
import instagram from '../../images/icon/instagram.svg'
import email from '../../images/icon/email.svg'
import placeholder from '../../images/icon/placeholder.svg'
import phone from '../../images/icon/phone.svg'
import './about-us.css'
// const temp_text = "salam salam salam salam salam salam salam salam salam sala salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam "
const temp_te = "chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori";

class AboutUs extends Component {
    render(){
        return(
            <div className="aboutt-container">
                <img 
                    alt="5" 
                    src={main_photo}
                    className="about-us-bg"
                    />
                <div className="about-details">
                     <div className="details1">
                        <div className="details4">
                            <div className="temp-div">
                                <div className="stromspartipps">Stromspartipps</div>
                                <div className="detail-st-texts">
                                    <div className="detail-st-texts-left">salam</div>
                                    <div className="detail-st-texts-right">{temp_te}</div>
                                </div>
                                <div className="detail-st-texts">
                                    <div className="detail-st-texts-left">salam</div>
                                    <div className="detail-st-texts-right">{temp_te}</div>
                                </div>
                                <div className="detail-st-texts">
                                    <div className="detail-st-texts-left">salam</div>
                                    <div className="detail-st-texts-right">{temp_te}</div>
                                </div>
                                <div className="detail-st-texts">
                                    <div className="detail-st-texts-left">salam</div>
                                    <div className="detail-st-texts-right">{temp_te}</div>
                                </div>
                                <div className="detail-st-texts">
                                    <div className="detail-st-texts-left">salam</div>
                                    <div className="detail-st-texts-right">{temp_te}</div>
                                </div>
                                <div className="detail-st-texts">
                                    <div className="detail-st-texts-left">salam</div>
                                    <div className="detail-st-texts-right">{temp_te}</div>
                                </div>
                                <div className="detail-st-texts">
                                    <div className="detail-st-texts-left">salam</div>
                                    <div className="detail-st-texts-right">{temp_te}</div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="details4-second">
                            <div className="temp-div">
                                <div className="detail-st-texts">
                                        <div className="detail-st-texts-left">salam</div>
                                        <div className="detail-texts-right">HI <br/>How Are you</div>
                                </div>
                                <div className="detail-st-texts">
                                        <div className="detail-st-texts-left">salam</div>
                                        <div className="detail-texts-right">HI <br/>How Are you</div>
                                </div>
                                <div className="detail-st-texts">
                                        <div className="detail-st-texts-left">salam</div>
                                        <div className="detail-texts-right">HI <br/>How Are you</div>
                                </div>
                                <div className="detail-st-texts">
                                        <div className="detail-st-texts-left">salam</div>
                                        <div className="detail-texts-right">HI <br/>How Are you</div>
                                </div>
                                <div className="detail-st-texts">
                                        <div className="detail-st-texts-left">salam</div>
                                        <div className="detail-texts-right">HI <br/>How Are you</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="details2">

                        <div className="details5">
                            <text className="contact-us-text">Contact Us</text>
                        </div>

                        <div className="details6">
                            <div className="details7">
                                <div className="logo-container">
                                    <img className={"logo-style"} src={phone}/>
                                </div>

                                <div className="logo-container">
                                    <img className={"logo-style"} src={placeholder}/>
                                </div>

                                <div className="logo-container">
                                    <img className={"logo-style"} src={email}/>
                                </div>
                            </div>

                            <div className="details7">
                                <div className="text-container">
                                    <text className="under-logo-text">040 740 7741 00</text>
                                    <text className="under-logo-text-under-phone">Montag Freitag von</text>
                                    <text className="under-logo-text-under-phone">9:00 bis 17:00 Uhr</text>
                                </div>
                                
                                <div className="text-container">
                                    <text className="under-logo-text">Pappelalee 28</text>
                                    <text className="under-logo-text">22089 Hamburg</text>
                                </div>

                                <div className="text-container">
                                    <text className="under-logo-text">info@devg24.de</text>
                                </div>
                            </div>

                        </div>

                        <div className="details5">
                            <img alt="1" className={"logo-style"} src={twitter}/>
                            <img alt="2" className={"logo-style"} src={facebook}/>
                            <img alt="3" className={"logo-style"} src={instagram}/>
                        </div>

                    </div>

                    <div className="details3">
                      
                    </div>

                </div>
                
            </div>
        );
    }
}

export default AboutUs;