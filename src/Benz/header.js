import { PureComponent } from "react";
import './header.css';
import logo from './logo.jpeg';
import search from './search.png';
class Header extends PureComponent {
    render() {
        return (
            <div className="header_container">
                <div className="header_logo">
                    <img className="logo" src={logo} alt="logo" />
                    <span className="brand">Mercedes-Benz</span>
                </div>
                <span style={{ "border": "1px solid white" }} className="i">i</span>
                <span className="provider">Provider/Privacy Statement</span>
                <span className="deutsch">Deutsch</span>
                <div className="navbar">
                    <a href="#company" className="active">Company</a>
                    <a href="#Vehicle">Vehicle</a>
                    <a href="#Design">Design</a>
                    <a href="#Innovation">Innovation</a>
                    <a href="mus">Museum and History</a>
                    <a href="#Sports">Sports</a>
                    <a href="#Events">Events</a>
                    <a href="#Lifestyle">Lifestyle</a>
                </div>

                <a href="#search" target="_self"><img className="search" src={search} alt="search"/></a>
            </div>
        );
    }
}

export default Header;
