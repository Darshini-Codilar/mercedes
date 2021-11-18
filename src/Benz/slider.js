import { PureComponent } from "react";
import './slider.css';
import S1 from "./c1.png";
import S2 from "./c2.png";
import S3 from "./c3.png";
import S4 from "./c4.png";

class Slider extends PureComponent {
   render() {
      return (
<div className="slider_container">
<section className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        
         <li id="carousel__slide1" tabindex="0" className="carousel__slide">
       <img src={S1} className="S1"alt="benze1" />
            <div className="carousel__snapper">
               <a href="#carousel__slide4" className="carousel__prev">Go to last slide</a>
               <a href="#carousel__slide2" className="carousel__next">Go to next slide</a>
            </div>
         </li>

         <li id="carousel__slide2" tabindex="0" className="carousel__slide">
       <img src={S2}className="S2"alt="benze2" />
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide1" className="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide3" className="carousel__next">Go to next slide</a>
         </li>

         <li id="carousel__slide3" tabindex="0" className="carousel__slide">
         <img src={S3} className="S3"alt="benze"/>
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide2" className="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide4" className="carousel__next">Go to next slide</a>
         </li>

         <li id="carousel__slide4" tabindex="0" className="carousel__slide">
      <img src={S4} className="S4"alt="benze4" />
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide3" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide1" class="carousel__next">Go to first slide</a>
         </li>        
      </ol>
 </section>

<div className="middle_search_bar">
      <input id="search" type="search" placeholder="I am looking for..." />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.3 76.3" height="1.2142857142857142rem"
         className="brandhub-icon">
         <path
            d="M23.838 8.911c-8.243 0-14.927 6.684-14.927 14.927 0 8.132 6.795 14.0927 14.927 14.927s14.927-6.795 14.927-14.927c-.001-8.243-6.795-14.927-14.927-14.927zm23.838 14.927c0 6.015-2.005 11.251-5.904 15.595l13.813 23.615c1.225 2.116 1.782 4.121 1.782 6.015 0 4.01-3.342 7.24-7.686 7.24-3.119 0-5.904-1.894-7.797-5.347L28.182 47.23c-1.225.334-2.673.445-4.344.445C10.805 47.676 0 36.871 0 23.838S10.805 0 23.838 0c12.587 0 23.838 10.582 23.838 23.838z"
            fill="currentColor"></path>
      </svg>
   </div>

   <div className="content">
      <div className="content_part">
         <h2>Welcome to the Mercedes-Benz international<br /> website.</h2>
         <p>Exclusive reports and current films: experience a broad range of topics from the <br />fascinating world of
            Mercedes-Benz. To find out about offers in your location, please<br /> go to the local Mercedes-Benz
            website.</p>
         <p>This is the International website of Mercedes-Benz AG.<br />
            Visitors from the U.S., please visit our U.S. website <a href="www.mbusa.com">www.mbusa.com.</a></p>
         <button>Bring me to my local website</button>
      </div>
   </div>

   <div className="three-box-list">
      <div className="under-three-box-list">Mercedes-Benz Museum</div>
      <div className="under-three-box-list">Mercedes me</div>
      <div className="under-three-box-list">She's Mercedes</div>
   </div>

<div className="three-link-menus">
      <a href="" className="first-link-active"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 70"
            width="1.3571428571428572rem" height="1rem" className="brandhub-icon">
            <path
               d="M61 10.9H34.7v26.3H61V10.9zm22.9 0H66.6v4.3H84v-4.3zm0 10.6H66.6v4.3H84v-4.3zm0 10.5H66.6v4.3H84V32zm0 10.6H34.7v4.3h49.2v-4.3zm-56.2 0H11.4v4.3h16.4v-4.3zm0-11H11.4v4.3h16.4v-4.3z"
               fill="currentColor"></path>
            <path
               d="M23.8.2v20.9H.5v35.6C.5 63.2 6.3 70 14 70h68.7c7.1 0 12.2-6.8 12.2-13.2V.2H23.8zm-18 56.5V26.3l18-.1v30.5c0 3.4-2.6 7.8-9.6 7.8-4.3.1-8.4-3.7-8.4-7.8zm76.9 7.8H25.8c.5-.1 3.3-2.4 3.3-7.8N
               V5.8h60v51c0 4.7-2.8 7.7-6.4 7.7z"
               fill="currentColor"></path>
         </svg>New</a>
      <a href="" className="second-link-active"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.264 57.368"
            width="1rem" height="1rem" className="brandhub-icon">
            <path
               d="M30.188 46.117L14.704 57.368 9.58 53.692l5.904-18.157L0 24.395l2.005-6.015h19.049L26.957 0h6.35l5.903 18.38h19.049l2.005 6.015-15.484 11.14 5.904 18.045-5.124 3.788z"
               fill="currentColor"></path>
         </svg>Popular</a>
      <a href="" className="third-link-active"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.106 30.21"
            width="0.7857142857142857rem" height="1rem" className="brandhub-icon">
            <path d="M24.106 15.052L0 30.21V0z" fill="currentColor"></path>
         </svg>Videos</a>
   </div>

</div>
      );
   }
}


export default Slider;