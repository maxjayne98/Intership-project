import React from 'react';
import WelCome from './components/welcome/welcome'
import Info from './components/info/info'
import Header from './components/header/header'
import AboutUs from './components/about-us/about-us'
import Estimation from './components/estimation/estimation'
import Forth from './components/forth/forth'
import Fifth from './components/fifth/fifth'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      prev:0,
      direction:null,
      hideMenu:false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    this.prev = window.scrollY;
    window.addEventListener('scroll', e => this.handleNavigation(e));
    window.addEventListener('scroll', this.handleScroll);
  }

handleNavigation = (e) =>{
    const window = e.currentTarget;

    if(this.prev > window.scrollY){
        // console.log("false");
        this.setState({direction:false});
      }
      else if(this.prev < window.scrollY){
        // console.log("true");
        this.setState({direction:true});
    }
    this.prev = window.scrollY;
};
handleScroll () {
  var scrollY = window.scrollY;
  // console.log(scrollY);
  if (scrollY >= 3 && scrollY <= 500  && this.state.direction) {

      window.scrollTo({
          top: 950,
          behavior: 'smooth'
        });
  }
  if (scrollY <= 947 && scrollY >= 547  && !this.state.direction) {
      // console.log('salam');
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
  }
  if (scrollY >= 953 && scrollY <= 1500  && this.state.direction) {

      window.scrollTo({
          top: 1905,
          behavior: 'smooth'
        });
        this.setState({hideMenu:true});
      }
      if (scrollY <= 1902 && scrollY >= 1522  && !this.state.direction) {
        // console.log('salam');
        window.scrollTo({
          top: 950,
          behavior: 'smooth'
        });
        // console.log('mahdi');
      }
      if (scrollY >= 1906 && scrollY <= 2463  && this.state.direction) {
        
        window.scrollTo({
          top: 2857,
          behavior: 'smooth'
        });
        this.setState({hideMenu:false});
        // console.log('mahdi');
      }
      if (scrollY <= 2854 && scrollY >= 2394  && !this.state.direction) {
        // console.log('salam');
        window.scrollTo({
          top: 1905,
          behavior: 'smooth'
        });
        this.setState({hideMenu:true});
  }
  if (scrollY >= 2860 && scrollY <= 3360  && this.state.direction) {

      window.scrollTo({
          top: 3800,
          behavior: 'smooth'
        });
  }
  if (scrollY <= 3797 && scrollY >= 3397  && !this.state.direction) {
    // console.log('salam');
    window.scrollTo({
        top: 2857,
        behavior: 'smooth'
      });
  }
  if (scrollY >= 3803 && scrollY <= 4353  && this.state.direction) {

      window.scrollTo({
          top: 4755,
          behavior: 'smooth'
        });
  }
  if (scrollY <= 4752 && scrollY >= 4392  && !this.state.direction) {
    // console.log('salam');
    window.scrollTo({
        top: 3800,
        behavior: 'smooth'
      });
  }
};
  render(){
    // console.log(this.state.direction);
      return (
        <div className="app" onScroll={this.handleScroll}>
          <Header />
          <WelCome/>
          <Info/>
          <Estimation hide_menu={this.state.hideMenu}/>
          <Forth/>
          <Fifth/>
          <AboutUs/> 
        </div>
    );
  }
}

export default App;
