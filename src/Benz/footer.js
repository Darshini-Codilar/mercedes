import { PureComponent } from "react";
import './footer.css';
import Petrol from "./petrol.png";
import Leaf from "./leaf.png";
import Brand1 from "./brand-logo1.svg";
import Brand2 from "./brand-logo2.svg";
import Brand3 from "./brand-logo3.svg";

class Footer extends PureComponent {
    render() {
        return (

            <div className="footer">
                <div className="r1">
                    <span> <img src={Petrol} alt="petrol" /> Kraftstoffverbrauch kombiniert </span>
                    <span className="h1"> <img src={Leaf} alt="leaf" />
                        CO₂-Emissionen kombiniert  </span>
                    <span className="h1"> <img src={Petrol} alt="petrol" />
                        Stromverbrauch im kombinierten Testzyklus
                    </span>
                </div>
                <div className="para">
                    <p>
                        <sup>1</sup>
                        Die angegebenen Werte wurden nach dem vorgeschriebenen Messverfahren ermittelt. Es handelt sich um die „NEFZ-CO₂-Werte“ i. S. v. Art. 2 Nr. 1 Durchführungsverordnung (EU) 2017/1153. Die Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet. Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG ermittelt. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.
                    </p>

                    <p>
                        <sup>4</sup>
                        Angaben zu Kraftstoffverbrauch, Stromverbrauch und CO₂-Emissionen sind vorläufig und wurden vom Technischen
                        Dienst für das Zertifizierungsverfahren nach Maßgabe des WLTP-Prüfverfahrens ermittelt und in NEFZ-Werte
                        korreliert. Eine EG-Typgenehmigung und Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor.
                        Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.
                    </p>

                    <p>
                        <sup>6</sup>
                        Stromverbrauch und Reichweite wurden auf der Grundlage der VO 692/2008/EG ermittelt. Stromverbrauch und
                        Reichweite sind abhängig von der Fahrzeugkonfiguration. Weitere Informationen zum offiziellen
                        Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem
                        „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen
                        Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil
                        Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.
                    </p>

                    <p>
                        <sup>7</sup>
                        Angaben zu Stromverbrauch und Reichweite sind vorläufig und wurden vom Technischen Dienst für das
                        Zertifizierungsverfahren nach Maßgabe der UN/ECE-Regelung Nr. 101 ermittelt. Die EG-Typgenehmigung und eine
                        Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor. Abweichungen zwischen den Angaben und
                        den amtlichen Werten sind möglich.
                    </p>

                    <p>
                        <sup>8</sup>
                        Alle technischen Angaben sind vorläufig und wurden intern nach Maßgabe der jeweils anwendbaren Zertifizierungsmethode ermittelt. Es liegen bislang weder bestätigte Werte vom TÜV noch eine EG-Typgenehmigung noch eine Konformitätsbescheinigung mit amtlichen Werten vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.
                    </p>

                </div>


                <div className="four-column-boxes">
                    <div className="boxes">
                        <div className="under-four-column-box">
                            <div className="box-heading">More Topics</div>
                            <hr></hr>
                            <div className="box-content">
                                <ul>
                                    <li> <a href="">Innovation</a></li>
                                    <li><a href="">Design</a></li>
                                    <li><a href="">Exhibitions</a></li>
                                    <li><a href="">Museum and History</a></li>
                                    <li><a href="">Sports</a></li>
                                    <li><a href="">Driving Events</a></li>
                                    <li><a href="">Mercedes me portal</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="under-four-column-box">
                            <div className="box-heading">Shopping</div>
                            <hr></hr>
                            <div className="box-content">
                                <ul>
                                    <li> <a href="">Dealer Search</a></li>
                                    <li><a href="">Mercedes-Benz Accessories</a></li>
                                    <li><a href="">Mercedes-Benz Collection</a></li>
                                    <li><a href="">Mercedes me connect Store</a></li>
                                    <li><a href="">Service and Parts</a></li>
                                    <li><a href="">Formula 1 store</a></li>
                                    <li><a href="">Mercedes-Benz Classic Center</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="under-four-column-box">
                            <div className="box-heading">All about cars</div>
                            <hr></hr>
                            <div className="box-content">
                                <ul>
                                    <li><a href="">Model Overview</a> </li>
                                    <li><a href="">Configurator</a> </li>
                                    <li><a href="">Test Drive</a> </li>
                                    <li><a href="">Mercedes-Mybach</a> </li>
                                    <li><a href="">Mercedes me connect</a> </li>
                                    <li><a href="">Mercedes-Benz Ex-Factory Driving Aids</a> </li>
                                    <li><a href="">WLTP</a> </li>
                                    <li><a href="">RDE</a> </li>
                                    <li><a href="">Semiconductors supply situation</a> </li>
                                    <li><a href="">Li-Ion U38.3</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="under-four-column-box">
                            <div className="box-heading">Discover more</div>
                            <hr></hr>
                            <div className="box-content">
                                <ul>
                                    <li><a href="">Daimler AG</a> </li>
                                    <li><a href="">Mercedes-Benz AG</a> </li>
                                    <li><a href="">Newsroom</a> </li>
                                    <li><a href="">Press</a> </li>
                                    <li><a href="">Career</a> </li>
                                    <li><a href="">heycar</a> </li>
                                    <li><a href="">SHARE NOW</a> </li>
                                    <li><a href="">Vulnerability Reporting Policy</a> </li>
                                    <li><a href="">Mercedes-Benz Energy</a> </li>
                                    <li><a href="">Mercedes-Benz Bank</a> </li>
                                    <li><a href="">Fleet Sales</a> </li>
                                    <li><a href="">Mercedes-Benz Global Training</a> </li>
                                    <li><a href="">Customer Center Sindelfingen</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lower-section-contact-box">
        <div className="under-contact-box-heading">
            Stay informed
            <hr/>
        </div>

        <div className="under-contact-box-para">
            <p>Follow us and use the following social media platforms to get in contact with us and to share your passion for the brand, products and services of Mercedes-<br/>Benz.</p>
            <ul>
                <li>
                    <a href=""><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1.9285714285714286rem" height="1.9285714285714286rem" className="brandhub-icon"><path d="M512 0c282.77 0 512 230.58 512 515.02 0 257.06-187.23 470.12-432 508.76V663.89h119.3L734 515.02l-1.243-.031.564-3.539-141.32-.002v-93.037c0-38.958 18.148-76.974 75.388-80.206l8.05-.222h64.562v-126.74l-.421-.071-.023-2.045s-60.882-10.011-119.09-10.011c-121.52 0-200.94 70.956-200.94 199.42v112.92h-135.08v152.45l135.05-.045.024 357.8C169.871 961.152 6.471 779.381.161 528.281l-.166-13.256c0-284.44 229.23-515.02 512-515.02V.004z" fill="currentColor"></path></svg></a>
                </li>
                <li>
                    <a href=""><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="1.9285714285714286rem" height="1.9285714285714286rem" className="brandhub-icon"><path d="M32 6.076a13.025 13.025 0 01-3.771 1.033 6.581 6.581 0 002.887-3.632 13.144 13.144 0 01-4.169 1.594 6.556 6.556 0 00-4.792-2.073 6.565 6.565 0 00-6.565 6.565c0 .514.058 1.015.17 1.496A18.643 18.643 0 012.227 4.2a6.533 6.533 0 00-.889 3.301 6.563 6.563 0 002.92 5.464 6.54 6.54 0 01-2.974-.822l-.001.083a6.57 6.57 0 005.267 6.437 6.62 6.62 0 01-2.966.112 6.571 6.571 0 006.133 4.559 13.17 13.17 0 01-8.153 2.811 13.29 13.29 0 01-1.566-.092 18.576 18.576 0 0010.064 2.95c12.076 0 18.679-10.003 18.679-18.679 0-.284-.006-.568-.018-.85a13.307 13.307 0 003.275-3.397z" fill="currentColor"></path></svg></a>
                </li>
                <li>
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.9285714285714286rem" height="1.9285714285714286rem" className="brandhub-icon"><path d="M31.68 9.556s-.313-2.221-1.272-3.199c-1.217-1.284-2.581-1.29-3.206-1.365-4.478-.326-11.195-.326-11.195-.326h-.014s-6.717 0-11.195.326c-.626.074-1.989.08-3.207 1.364C.632 7.334.32 9.554.32 9.554S0 12.162 0 14.77v2.445c0 2.608.32 5.216.32 5.216s.312 2.221 1.271 3.198c1.218 1.284 2.817 1.244 3.529 1.378 2.56.248 10.88.324 10.88.324s6.724-.01 11.202-.336c.625-.076 1.989-.081 3.206-1.366.959-.978 1.272-3.198 1.272-3.198s.32-2.607.32-5.216V14.77c0-2.607-.32-5.216-.32-5.216zM12.696 20.18l-.001-9.055 8.646 4.543-8.645 4.512z" fill="currentColor"></path></svg></a>
                </li>
                <li>
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.9285714285714286rem" height="1.9285714285714286rem" className="brandhub-icon"><path d="M16 7.677c-4.516 0-8.258 3.677-8.258 8.258s3.677 8.258 8.258 8.258c4.581 0 8.258-3.742 8.258-8.258S20.516 7.677 16 7.677zm0 13.549c-2.903 0-5.29-2.387-5.29-5.29s2.387-5.29 5.29-5.29 5.29 2.387 5.29 5.29-2.387 5.29-5.29 5.29zM26.452 7.484a1.871 1.871 0 11-3.743 0 1.871 1.871 0 013.743 0z" fill="currentColor"></path><path d="M29.419 2.645C27.742.903 25.355 0 22.645 0H9.355C3.742 0 0 3.742 0 9.355v13.226c0 2.774.903 5.161 2.71 6.903C4.452 31.161 6.774 32 9.42 32h13.161c2.774 0 5.097-.903 6.774-2.516C31.097 27.807 32 25.42 32 22.645V9.355c0-2.71-.903-5.032-2.581-6.71zm-.258 20c0 2-.71 3.613-1.871 4.71s-2.774 1.677-4.71 1.677H9.419c-1.935 0-3.548-.581-4.71-1.677-1.161-1.161-1.742-2.774-1.742-4.774V9.355c0-1.935.581-3.548 1.742-4.71 1.097-1.097 2.774-1.677 4.71-1.677h13.29c1.935 0 3.548.581 4.71 1.742 1.097 1.161 1.742 2.774 1.742 4.645v13.29z" fill="currentColor"></path></svg></a>
                </li>
                <li>
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.9285714285714286rem" height="1.9285714285714286rem" className="brandhub-icon"><path d="M25.604 30.968V18.852s-.359-3.241-3.495-3.241c-3.134 0-3.707 3.081-3.707 3.081v12.276h-6.459l.105-20.014h6.248l-.051 2.516s1.303-3.288 6.211-3.288c4.907 0 7.13 2.82 7.543 8.093v12.694h-6.396zM4.021 8.111C1.802 8.111 0 6.524 0 4.562s1.802-3.553 4.021-3.553S8.042 2.6 8.042 4.562 6.24 8.111 4.021 8.111zm3.986 22.881H.066V11.005l7.941-.051v20.038z" fill="currentColor"></path></svg></a>
                </li>
            </ul>
        </div>
    </div>

    <hr className="footer-vertical-line" />
    <div className="footer-brand-images">
        <img src={Brand1} />
        <img src={Brand2} />
        <img src={Brand3} />
    </div>
  

    <hr className="footer-vertical-line" />
                <div className="main-footer">
                    <div className="main-footer-first-part">
                        <p>This is the International website of Mercedes-Benz AG. Visitors from the U.S., please visit our U.S. website <a href="">www.mbusa.com.</a></p>
                    </div>
                    <div className="main-footer-second-part">
                        <div className="under-second-part">
                            <ul>
                                <li>
                                    <a href="">Provider</a>
                                </li>
                                <li>
                                    <a href="">Legal Notice</a>
                                </li>
                                <li>
                                    <a href="">Cookies</a>
                                </li>
                                <li>
                                    <a href="">Privacy Statement</a>
                                </li>
                                <li>
                                    <a href="">Newsfeed(RSS)</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                                <li>
                                    <a href="">Careers</a>
                                </li>
                                <li>
                                    <a href="">Investor Relations</a>
                                </li>
                                <li>
                                    <a href="">Daimler AG</a>
                                </li>
                            </ul>
                        </div>
                        <div className="top-button">
                            <a href="#nav">Top <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 19.957" width="1.4428571428571428rem" height="1.8857142857142858rem" className="brandhub-icon"><path d="M0 19.957l.009-5.222L16.901 0 33.5 14.674l-.009 5.222L16.888 6.963z" fill="currentColor"></path></svg></a>
                        </div>
                    </div>
                </div>


               </div>

        );
    }
}

export default Footer;