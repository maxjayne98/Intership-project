import React,{Component} from 'react';
import './info.css'
import background_image from '../../images/picture/1234.jpg'

class Info extends Component{

    render(){
        return(
            <div id="secondaary"className="second-container">
                <img 
                    alt="2" 
                    src={background_image}
                    className="second-bg"
                    />
                <div className="second-info-details">
                    <text className="info-text-first">Wir sind regenerativ, erneuerbar und wir leben die Energiewende mit einer <br/>sauberen und sicheren Versorgung mit Strom und Gas.</text>
                    <text className="info-text-second">Die Sonne liefert täglich Energie - wir nutzen sie. Wir von der DEVG lassen einen Teil unseres Stroms über<br/> die von der Deutschen 
                                                         Energieberatung GmbH projektierten Solaranlagen produzieren und über <br/>
                                                         kleine, regionale Ökostrom-Erzeuger. Und das deutschlandweit!
                                                         <br/>
                                                         <br/>
                                                         Auch wenn die Sonne mal nicht scheint, ist deine Stromversorgung bei uns sichergestellt. Immer aus<br/> ausschließlich regenerativen, 
                                                         erneuerbaren Energiequellen.
                                                         <br/>
                                                         <br/>
                                                         Was bei uns anders ist: Wir vermarkten unseren Strom direkt. Ohne Zwischenhandel, ohne Strombörse, ohne Glaspaläste.
                                                         <br/>
                                                         <br/>
                                                         Unser Versprechen an dich: Wir machen dich 100 % unabhän gig von Kohle- und Atomstrom
                    </text>
                    <text className="info-text-third">Gemeinsam verbessern wir unser Klima.</text>
                
                </div>
            </div>
        );
    }
}

export default Info;