import React,{Component} from 'react';
import right_image from '../../images/picture/B-image.jpg';
import right_image_blured from '../../images/picture/B-image-blured.jpg';
import left_image from '../../images/picture/P-image.jpg';
import left_image_blured from '../../images/picture/P-image-blured.jpg';
import { ScrollTo } from "react-scroll-to";
import {Nav,Col,Row,Tab} from 'react-bootstrap';

import './estimation.css'

const right_options = ["first","second","third","forth","fifth","sixth"];
const right_details = ["1 Subjectstoecstaticchildrenhe. Could ye leave up as built match. Dejection agreeable attention set suspected led offending. Admitting an performed supposing by. Garden agreed matter are should formed temper had. Full held gay now roof whom such next was. Ham pretty our people moment put excuse",
                       "2 Subjectstoecstaticchildrenhe. Could ye leave up as built match. Dejection agreeable attention set suspected led offending. Admitting an performed supposing by. Garden agreed matter are should formed temper had. Full held gay now roof whom such next was. Ham pretty our people moment put excuse",
                       "3  Subjectstoecstaticchildrenhe. Could ye leave up as built match. Dejection agreeable attention set suspected led offending. Admitting an performed supposing by. Garden agreed matter are should formed temper had. Full held gay now roof whom such next was. Ham pretty our people moment put excuse",
                       "4  Subjectstoecstaticchildrenhe. Could ye leave up as built match. Dejection agreeable attention set suspected led offending. Admitting an performed supposing by. Garden agreed matter are should formed temper had. Full held gay now roof whom such next was. Ham pretty our people moment put excuse",
                       "5  Subjectstoecstaticchildrenhe. Could ye leave up as built match. Dejection agreeable attention set suspected led offending. Admitting an performed supposing by. Garden agreed matter are should formed temper had. Full held gay now roof whom such next was. Ham pretty our people moment put excuse",
                       "6  Subjectstoecstaticchildrenhe. Could ye leave up as built match. Dejection agreeable attention set suspected led offending. Admitting an performed supposing by. Garden agreed matter are should formed temper had. Full held gay now roof whom such next was. Ham pretty our people moment put excuse"];

class Estimation extends Component{
    constructor(props){
        super(props);
        this.state={
            right_selected:false,
            left_selected:false,
            right_item_selcted:right_details[0]
        }
        this.handleRightClick = this.handleRightClick.bind(this);
        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.changeRightDetail = this.changeRightDetail.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        // this.passEstimation = this.passEstimation.bind(this);
        
    }
    componentDidMount(){
        // this.prev = window.scrollY;
        // window.addEventListener('scroll', e => this.handleNavigation(e));
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll () {
        var scrollY = window.scrollY;
        if (scrollY <= 1902 && scrollY >= 1522) {
            this.setState({right_selected:false,left_selected:false})
        }
        if (scrollY >= 1906 && scrollY <= 2463 ) {
          this.setState({right_selected:false,left_selected:false})
        }
    }
    handleRightClick () {
        if(this.state.right_selected == false ){
            this.setState({right_selected:true})
            this.setState({left_selected:false})
        }
        else 
        this.setState({right_selected:false})
    }
    
    handleLeftClick () {
        
        if(this.state.left_selected == false){
            this.setState({left_selected:true})
            this.setState({right_selected:false})
        }
        else 
        this.setState({left_selected:false})
    }
    
    changeRightDetail(index){
        this.setState({right_item_selcted : right_details[index]})
    }

      render(){
        const listItem = right_options.map((row,index) => {return <Tab titile= "salam" className="idk-right-table-data" key={index} onClick={() => {this.changeRightDetail(index)}}> </Tab>});
        return(
            <div className="idk-org-container">
                    <div className={this.state.left_selected ?"after-idk-left-menu" : "idk-left-menu"}>
                        <img className="blured-bgg" src={left_image_blured}/>
                        <table className =  {this.state.left_selected ?"after-idk-left-table" : "idk-left-table"}>
                        
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="">
                                <Row>
                                    <Col sm={9}>
                                        <Tab.Content className="right right">
                                            <Tab.Pane eventKey="first">
                                            <text >salam chetori</text>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                            
                                            salam chetori2
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                            
                                            salam chetori3
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="forth">
                                            
                                            salam chetori4
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fifth">
                                            
                                            salam chetori5
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="sixth">
                                            
                                            salam chetori6
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column left">
                                            <Nav.Item>
                                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="second">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="third">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="forth">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="fifth">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="sixth">Tab 1</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </table>
                    </div>

                <div className={(this.state.right_selected || this.state.left_selected) ? "after-idk-container":"idk-container"}>
                
                    <img className="img" alt="left" src={left_image}/>
                    <img className="img" alt="right" src={right_image}/>

                    <div className={(this.state.right_selected || this.state.left_selected) ? "after-idk-detail-container":"idk-detail-container"}>

                        <div className={(this.state.right_selected || this.state.left_selected) ? "after-blured-container":"blured-container"}>
                            <div className={(this.state.right_selected || this.state.left_selected) ? "after-blured-box":"blured-box"}></div>
                        </div>

                        <div className={(this.state.right_selected || this.state.left_selected) ? "after-idk-botton-container" :"idk-botton-container"}>
                                <div className="idk-botton-left" onClick={this.handleLeftClick}>
                                    PRIVATE
                                </div>

                                <div className="idk-botton-right" onClick={this.handleRightClick}>
                                    GEWERBE
                                </div>
                        </div>
                        <div className= {(this.state.right_selected || this.state.left_selected) ? "after-idk-scroll-botton-container":"idk-scroll-botton-container"}>
                            <ScrollTo>
                            {({ scrollTo }) => (
                                <text className="idk-text-style" onClick={() => scrollTo({y: 2858,smooth:true })}>scroll</text>
                                )}
                            </ScrollTo>
                            <div className="idk-vertical-line"></div>
                            
                        </div>
                    </div>
                </div>
                <div className={this.state.right_selected ?"after-idk-right-menu" : "idk-right-menu"}>
                    <img className="blured-bgg" src={right_image_blured}/>
                    <table className =  {this.state.right_selected ?"after-idk-right-table" : "idk-right-table"}>
                        {/* <tr>
                            <th className="table-h">
                                {listItem}
                            </th>  
                            <th className="idk-right-text-detail">
                                <text className="idk-right-text">
                                    {this.state.right_item_selcted} 
                                </text>
                            </th>
                        </tr>  */}
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="">
                            <Row>
                                <Col sm={3}>
                                <Nav variant="pills" className="flex-column right">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1 Tab 1 Tab 1 </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="forth">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="fifth">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="sixth">Tab 1</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Col>
                                <Col sm={9}>
                                <Tab.Content className="right right">
                                    <Tab.Pane eventKey="first">
                                    <text >salam chetori</text>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    
                                    salam chetori2
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                    
                                    salam chetori3
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="forth">
                                    
                                    salam chetori4
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                    
                                    salam chetori5
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                    
                                    salam chetori6
                                    </Tab.Pane>
                                </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </table>
                </div>
            </div>
        );
    }
}
export default Estimation;