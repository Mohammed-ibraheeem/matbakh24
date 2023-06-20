import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import image1 from './image/الرياض.png'
import image2 from './image/المدينة.png'
import image3 from './image/الخبر.png'
import image4 from './image/الجبيل.png'
import image5 from './image/الدمام.png'
import image6 from './image/مكة.png'
import image7 from './image/الطائف.png'
import image8 from './image/جدة.png'
import './css/Client.css'
function Client() {
    return (
        <>
            <section id="parteners" class="client-section pb-100">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="section-heading text-center mb-5">
                                <h2>
                                    اماكن تواجدنا
                                </h2>
                                <div class="small-border wow fadeInUp" data-wow-delay=".85s"></div>
                                <p dir='rtl'>
                                    يتحول بسرعة داخلية أو مصادر شفافة بينما تمتص الموارد الأعمال الإلكترونية. ابتكار داخلي مقنع بشكل ملائم.
                                </p>
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center ">
                        <div class="col-md-12">
                            <div class="owl-carousel clients-carousel owl-loaded owl-drag">
                                <div class="owl-stage-outer">
                                    <OwlCarousel items={6} margin={60} autoplay={true} loop={true} >
                                        <div >
                                            <a href=' ' class="item single-customer">
                                                <img className="img-owl" src={image1} alt='...' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href=' ' class="item single-customer">
                                                <img className="img-owl" src={image2} alt='...' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href=' ' class="item single-customer">
                                                <img className="img-owl" src={image3} alt='...' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href=' ' class="item single-customer">
                                                <img className="img-owl" src={image4} alt='...' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href=' ' class="item single-customer">
                                                <img className="img-owl" src={image5} alt='...' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href=' ' class="item single-customer">
                                                <img className="img-owl" src={image6} alt='...' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href=' ' class="item single-customer">
                                                <img className="img-owl" src={image7} alt='...' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href=' ' class="item single-customer">
                                                <img className="img-owl" src={image8} alt='...' />
                                            </a>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Client;