import React,{Component} from 'react';
import menu from '../../images/icon/Group 491.svg';
import logo from '../../images/icon/logo.svg';
import './header.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            scrolled:false,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    
    handleScroll () {
        var scrollY = window.scrollY;
        if (scrollY >= 200) {
          this.setState({ scrolled: true });
        } else {
          this.setState({ scrolled: false });
        }
    }

    render(){
        window.addEventListener('scroll',this.handleScroll);
        return(
            <div className={this.state.scrolled ? "header-after":"header-before"}>
                <div className="header-menu-continer">
                    <img 
                        className="header-menu" 
                        alt="menu" 
                        src={menu}
                        onClick={() => {alert("you clicked menu!")}}
                        />
                </div>
                <div className={this.state.scrolled ? "after-header-logo-continer":"header-logo-continer"}>
                    <img  
                                className={this.state.scrolled?"after-logoo":"logo"} 
                                alt = "Bak-ground" 
                                src = {logo}
                                />
                </div>
            </div>
        );
    }
}
export default Header;