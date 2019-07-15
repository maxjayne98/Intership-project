import React, {Component} from 'react';
import solar_panel_pic from '../../images/picture/solar-panel.jpg'
import './fifth.css';

class Fifth extends Component{

      render(){

        return(
            <div className="fifth-container">
                <div className="fifth-first-details">
                    <div className="blog-container">
                        <text className="blog-text">Blog</text>
                    </div>
                    <div className="orange-rec">

                    </div>
                </div>
                <div className="fifth-second-details">
                    <div className="first-col">
                        <div className='big-card'>
                            <img alt="solar-pic"class="solar-panel-pic"src={solar_panel_pic}/>
                            <div className='big-card-detail-container'>
                                <div className="big-first-text">
                                    <text className="big-name-detail">
                                        Lorem Ipsum
                                    </text>
                                    <text className="big-date-detail">
                                        May 19 ,2019
                                    </text>
                                </div>
                                <div className="big-second-text">
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                </div>
                            </div>
                            <div className='big-card-btn-container'>
                                <div className='card-btn'>
                                    Mehr Isen
                                </div>
                            </div>
                        </div>
                    </div>    

                    <div className="second-col">
                        <div className='small-card'>
                            <img alt="solar-pic"class="small-solar-panel-pic"src={solar_panel_pic}/>
                            <div className='small-card-detail-container'>
                                <div className="small-first-text">
                                    <text className="small-name-detail">
                                        Lorem Ipsum
                                    </text>
                                    <text className="small-date-detail">
                                         May 19 ,2019
                                    </text>
                                    </div>
                                    <div className="small-second-text">
                                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    </div>
                                </div>
                                <div className='small-card-btn-container'>
                                    <div className='card-btn'>
                                        Mehr Isen
                                    </div>
                                </div>
                            </div>
                        <div className='small-card'>
                            <img alt="solar-pic"class="small-solar-panel-pic"src={solar_panel_pic}/>
                            <div className='small-card-detail-container'>
                                <div className="small-first-text">
                                    <text className="small-name-detail">
                                        Lorem Ipsum
                                    </text>
                                    <text className="small-date-detail">
                                         May 19 ,2019
                                    </text>
                                    </div>
                                    <div className="small-second-text">
                                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    </div>
                                </div>
                                <div className='small-card-btn-container'>
                                    <div className='card-btn'>
                                        Mehr Isen
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                    <div className="third-col">
                         <div className='hot-topic-card'>
                            {/* <img alt="solar-pic"class="solar-panel-pic"src={solar_panel_pic}/> */}
                            <div className='hot-topic-card-detail-container'>
                                <text className="hot-topic-title">Hot Topics:</text>
                                <div className="hot-topic-titles">
                                    <text className="undered">salam salam salam</text>
                                    <text className="undered">under-Lined</text>
                                </div>
                                <div className="hot-topic-titles">
                                    <text className="undered">salam salam salam</text>
                                    <text className="undered">under-Lined</text>
                                </div>
                                <div className="hot-topic-titles">
                                    <text className="undered">salam salam salam</text>
                                    <text className="undered">under-Lined</text>
                                </div>
                                <div className="hot-topic-titles">
                                    <text className="undered">salam salam salam</text>
                                    <text className="undered">under-Lined</text>
                                </div>
                                <div className="hot-topic-titles">
                                    <text className="undered">salam salam salam</text>
                                    <text className="undered">under-Lined</text>
                                </div>
                                <div className="hot-topic-titles">
                                    <text className="undered">salam salam salam</text>
                                    <text className="undered">under-Lined</text>
                                </div>
                                <div className="hot-topic-titles">
                                    <text className="undered">salam salam salam</text>
                                    <text className="undered">under-Lined</text>
                                </div>
                                <div className="hot-topic-titles">
                                    <text className="undered">salam salam salam</text>
                                    <text className="undered">under-Lined</text>
                                </div>
                                <div className="hot-topic-titles">
                                    <text className="undered">salam salam salam</text>
                                    <text className="undered">under-Lined</text>
                                </div>
                            </div>
                            <div className='hot-topic-card-btn-container'>
                                <div className='hot-topic-btn'>
                                    See all topics
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Fifth;