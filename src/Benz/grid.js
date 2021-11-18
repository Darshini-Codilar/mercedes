import { PureComponent } from "react";
import './grid.css';
import Img1 from "./img1.webp";
import Img2 from "./img2.webp";
import Img3 from "./img3.webp";
import Img4 from "./img4.webp";
import Img5 from "./img5.webp";
import Img6 from "./img6.webp";
import Img7 from "./img7.webp";
import Img8 from "./img8.webp";
import Img9 from "./img9.webp";
import Img10 from "./img10.webp";
import Img11 from "./img11.webp";
import Img12 from "./img12.webp";
import Img13 from "./img13.webp";
import Img14 from "./img14.webp";

class Grid extends PureComponent {
    render() {
        return (
    <div className="image-grids">
       
                <div class="first-image-grids">
                    <div className="col1">
                        <img src={Img1} alt="im" />   
                    </div>
                    <div className="col2">
                        <img src={Img2} alt="im" />
                        <img src={Img3} alt="im" />
                    </div>
                   <div className="col3">
                    <img src={Img4} alt="im" />
                    <img src={Img5} alt="im" />
                    </div>
                </div>
            
            <div className="second-image-grids">
                    <img src={Img6} alt="im" />
                    <img src={Img7} alt="im" />
                    <img src={Img8} alt="im" />
                    <img src={Img9} alt="im" />
            </div>

            <div class="third-image-grids">
                    <div className="col1">
                        <img src={Img10} alt="im" />   
                    </div>
                    <div className="col2">
                        <img src={Img11} alt="im" />
                        <img src={Img12} alt="im" />
                    </div>
                   <div className="col3">
                    <img src={Img13} alt="im" />
                    <img src={Img14} alt="im" />
                    </div>
                </div>
                
                <div className="more-view-grid-button">
                    <a href=""> 
                   Show More</a>
                </div>
    </div>
        );
    }
}
export default Grid;