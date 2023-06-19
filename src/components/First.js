import { Container } from "react-bootstrap";
import image1 from './image/12285008551553233092-512.png'
import image2 from './image/13295027321554469048-512.png'
import image3 from './image/20658172561553750378-512.png'
import image4 from './image/5425920831554469335-512.png'
import image5 from './image/tik-tok.png'
import image6 from './image/4-web4.png'
import image7 from './image/google-play.png'
import image8 from './image/apple-logo (1).png'
import './css/first.css'
function First() {
    return (
        <>
            <section className="ptb-100 bg-image banner-h py-5 sec1">
                <Container>
                    <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <div className="img-wrap">
                                <img src={image6} alt="appimage" className="img-fluid im1" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 div-2">
                            <div className="hero-slider-content py-5 div-5 ">
                                <center>
                                    <h1 className="head-1"> تطبيق مطبخ 24/7 </h1>
                                    <p className="lead-1"> كل اللي تبيه تلاقيه</p>
                                    <div className="action-btns mt-4 ">
                                        <ul className="list-inline" >
                                            <li className="list-inline-item dd1">
                                                <a href="https://apps.apple.com/us/app/%D9%85%D8%B7%D8%A8%D8%AE-24/id1641282323" className="d-flex align-items-center app-download-btn btn btn-brand d1">
                                                    <div className="download-text text-left">
                                                        <small className="s1">تحميل من</small>
                                                        <h5 className="s2">Google Play </h5>
                                                    </div>
                                                    <span className="span-icon"><img src={image7} alt=".." className="img-icon" /></span>
                                                </a>
                                            </li>
                                            <li className="list-inline-item dd2">
                                                <a href="https://play.google.com/store/apps/details?id=com.tanfeed2021.matbahk24" className="d-flex align-items-center app-download-btn btn btn-brand d1">
                                                    <div className="download-text text-left">
                                                        <small className="s1" >تحميل من</small>
                                                        <h5 className="s2">App Store</h5>
                                                    </div>
                                                    <span className="span-icon"><img src={image8} alt=".." className="img-icon" /></span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="social-icons d-flex icons">
                                            <a className="tiktok" href="https://www.tiktok.com/@matbakh24">
                                                <img src={image5} alt=".." className="icon" /></a>
                                            <a className="youtube" href="https://www.youtube.com/@Matbakh24-7">
                                                <img src={image4} alt=".." className="icon" /></a>
                                            <a className="instagram" href="https://www.instagram.com/matbakh_24/">
                                                <img src={image3} alt=".." className="icon" /></a>
                                            <a className="twitter" href="https://twitter.com/Matbakh24">
                                                <img src={image2} alt=".." className="icon" /></a>
                                            <a className="facebook" href="https://www.facebook.com/profile.php?id=100090884470615">
                                                <img src={image1} alt=".." className="icon" /></a>
                                        </div>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </Container>
            </section >
        </>
    );
}
export default First;