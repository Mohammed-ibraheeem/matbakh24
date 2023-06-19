import image1 from "./image/bg-offer.jpg";
import image2 from "./image/offer-2.png";
import './css/Offers.css'
function Offers() {
    return (
        <>
            <section dir='rtl' id="offers" className="offers-h" aria-label="section" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="title">
                                <h5 className="s1 wow fadeInUp" data-wow-delay=".5s">
                                    <span className="span-1">العروض الخاصة</span>
                                </h5>
                                <h2 className="wow fadeInUp" data-wow-delay=".75s">من اليوم</h2>
                                <div className="small-border wow fadeInUp" data-wow-delay=".85s"></div>
                            </div>
                            <div className="mb-sm-30 wow fadeInUp" data-wow-delay="1s" >
                                <h3> الفراخ المحمرة في الفرن مع الفحم </h3>
                                <p>                    الفراخ فى الفرن بعد سلقها من أفضل الطرق الصحية لطهى الفراخ فهى تجمع بين المذاق المميز وفى نفس الوقت تحتفظ بالعناصر الغذائية ...                    </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="image-with-counter">
                                <img className="img-1 img-fluid wow zoomIn" src={image2} alt="..." />
                                <div className="div-5  wow zoomIn" data-wow-delay=".5s">
                                    <div className="de_count">
                                        {/* <h2>100</h2>*/}
                                        <h3 className="counter-item">
                                            <span className="odometer odometer-auto-theme" data-odometer-final="100">
                                                <div className="odometer-inside">
                                                    <span className="odometer-digit">
                                                        <span className="odometer-digit-spacer">8</span>
                                                        <span className="odometer-digit-inner">
                                                            <span className="odometer-ribbon">
                                                                <span className="odometer-ribbon-inner">
                                                                    <span className="odometer-value">0</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="odometer-digit">
                                                        <span className="odometer-digit-spacer">8</span>
                                                        <span className="odometer-digit-inner">
                                                            <span className="odometer-ribbon">
                                                                <span className="odometer-ribbon-inner">
                                                                    <span className="odometer-value">0</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="odometer-digit">
                                                        <span className="odometer-digit-spacer">8</span>
                                                        <span className="odometer-digit-inner">
                                                            <span className="odometer-ribbon">
                                                                <span className="odometer-ribbon-inner">
                                                                    <span className="odometer-value">1</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </span>
                                        </h3>
                                        <h5 className="text-white">تباع اليوم</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay-img">
                    <img className="jarallax-img" src={image1} alt="..." />
                </div>
            </section>
        </>
    )
}
export default Offers;