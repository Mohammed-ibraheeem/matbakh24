import { Image } from "react-bootstrap";
import "./css/Navbas.css"
import image1 from './image/LOGO-1.png'
function Navbar() {
    return (
        <>
            <header className="header ">
                <nav dir="rtl" className="navbar navbar-expand-lg fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="https://matbakh24.com">
                            <Image style={{ width: '105px', maxHeight: '90px', marginRight: '85px' }} src={image1} alt="logo" class="img-fluid" />
                        </a>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fal fa-bars">
                            </span>
                        </button>
                        <div className="navbar-collapse h-auto collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto menu">
                                <li>
                                    <a href="/#"> الرئيسية </a>
                                </li>
                                <li >
                                    <a className="page-scroll" href="/#"> من نحن </a>
                                </li>
                                <li >
                                    <a className="page-scroll" href="/#"> المدونة</a>
                                </li>
                                <li >
                                    <a className="page-scroll" href="/#"> شاشات </a>
                                </li>
                                <li >
                                    <a className="page-scroll" href="/#"> مطابخنا </a>
                                </li>
                                <li >
                                    <a className="page-scroll" href="/#"> عروضنا </a>
                                </li>
                                <li >
                                    <a className="page-scroll" href="/#">تواصل معنا </a>
                                </li>
                            </ul>
                            <a href="tel:920003266" className="blob-btn">
                                <span>920003266</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Navbar;