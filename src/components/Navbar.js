import { Image } from "react-bootstrap";
import "./css/Navbas.css"
function Navbar() {
    return (
        <>

            <nav class="navbar justify-content-center navbar-expand-lg bg-body-tertiary navbar">
                <div class="container-fluid p-2  di1">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <a href="tel:920003266" class="blob-btn">
                            <span>920003266</span>
                        </a>
                        <div className="d1">
                            <ul class="nav justify-content-center">
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">تواصل معنا </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="/#"> عروضنا </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#"> مطابخنا </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#"> شاشات </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#"> المدونة</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#"> من نحن </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#"> الرئيسية </a>
                                </li>
                            </ul>
                        </div>
                        <a class="navbar-brand a1" href="https://matbakh24.com" >
                            <Image style={{ width: '110px', maxHeight: '90px' }} src="https://matbakh24.com/wp-content/uploads/2023/03/LOGO-1.png" alt="logo" class="img-fluid" />
                        </a>
                    </div>
                </div>

            </nav>
        </>
    );
}
export default Navbar;