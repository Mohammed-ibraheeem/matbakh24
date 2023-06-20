import './css/Footer.css'
import image1 from './image/12285008551553233092-512.png'
import image2 from './image/13295027321554469048-512.png'
import image3 from './image/20658172561553750378-512.png'
import image4 from './image/5425920831554469335-512.png'
import image5 from './image/tik-tok.png'
import image6 from './image/google-play-black.png'
import image7 from './image/app-store-black.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (
        <>
            <footer image-overlay="8">
                <div dir='rtl' class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="foot-block">
                                    <h3>عنواننا</h3>
                                    <div class="info-f">
                                        <a href="https://www.google.com/">
                                            <FontAwesomeIcon className='foo' icon={faLocationDot}></FontAwesomeIcon>
                                            <span>جميع أنحاء المملكة وقريبا في باقي دول الخليج</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="foot-block">
                                    <h3>ساعات العمل</h3>
                                    <div class="info-f">
                                        <p> 24/7 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="foot-block">
                                    <h3>بيانات التواصل</h3>
                                    <div class="info-f">
                                        <a href="tel: 9200-03266">
                                            <FontAwesomeIcon className='foo' icon={faPhone}></FontAwesomeIcon>
                                            <span>
                                                <u> 9200-03266</u>
                                            </span>
                                        </a>
                                        <a href="mailto: info@matbakh24.com">
                                            <FontAwesomeIcon className='foo' icon={faEnvelope}></FontAwesomeIcon>
                                            <span>
                                                <u> info@matbakh24.com</u>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="social-icons d-flex icons">
                                        <a className="facebook" href="https://www.facebook.com/profile.php?id=100090884470615">
                                            <img src={image1} alt=".." className="icon" /></a>
                                        <a className="twitter" href="https://twitter.com/Matbakh24">
                                            <img src={image2} alt=".." className="icon" /></a>
                                        <a className="instagram" href="https://www.instagram.com/matbakh_24/">
                                            <img src={image3} alt=".." className="icon" /></a>
                                        <a className="youtube" href="https://www.youtube.com/@Matbakh24-7">
                                            <img src={image4} alt=".." className="icon" /></a>
                                        <a className="tiktok" href="https://www.tiktok.com/@matbakh24">
                                            <img src={image5} alt=".." className="icon" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="foot-block">
                                    <h3>تحـميل</h3>
                                    <div class="download-app">
                                        <div class="button-group store-buttons store-black d-flex flex-wrap">
                                            <a href="https://play.google.com/store/apps/details?id=com.tanfeed2021.matbahk24">
                                                <img src={image6} alt='...' />
                                            </a>
                                            <a href="https://apps.apple.com/us/app/%D9%85%D8%B7%D8%A8%D8%AE-24/id1641282323">
                                                <img src={image7} alt='...' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="copyRight">
                                    <p>جميع الحقوق محفوظة لشركة تنفيذ - مطبخ24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;