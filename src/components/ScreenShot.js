import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import image1 from './assets/img/screen.jpg-1.jpg'
import image2 from './assets/img/screen.jpg-2.jpg'
import image3 from './assets/img/screen.jpg-3.jpg'
import image4 from './assets/img/screen.jpg4_.jpg'
import image5 from './assets/img/screen.jpg-5.jpg'
import './css/ScreenShot.css'
function ScreenShot() {

    return (
        <section id="screenshots" class="screenshots-section screenshots-h bg-gray">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-9 col-lg-8">
                        <div class="title">
                            <h5 class="s1 wow fadeInUp" data-wow-delay=".5s">
                                <span>تطبيق جوال</span>
                            </h5>
                            <h2 class="wow fadeInUp" data-wow-delay=".75s"> لقطات شاشة التطبيقات </h2>
                            <div class="small-border wow fadeInUp" data-wow-delay=".85s"></div>
                        </div>
                    </div>
                </div>
                <div class="screenshot-wrap">
                    <div class='container-fluid' >
                        <div class="screenshot-frame">
                        </div>
                        <div class="screen-carousel owl-carousel owl-loaded owl-drag">
                            <div class="owl-stage-outer">

                                <OwlCarousel items={4} margin={30} autoplay={true} loop={true} >
                                    <div ><img className="img" src={image1} alt='...' /></div>
                                    <div><img className="img" src={image2} alt='...' /></div>
                                    <div><img className="img" src={image3} alt='...' /></div>
                                    <div><img className="img" src={image4} alt='...' /></div>
                                    <div><img className="img" src={image5} alt='...' /></div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ScreenShot;