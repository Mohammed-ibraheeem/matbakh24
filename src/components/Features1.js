import './css/Features1.css'
import image9 from './image/google-play.png'
import image10 from './image/apple-logo (1).png'
function Features1() {
    return (
        <section dir='rtl' id="features" class="section features-h bg-gray">
            <div class="container">
                <div className="row">
                    <div class="col-12 col-md-4">
                        <div class="features-slider-wrapper overflow-hidden">
                            <ul class="features-slider owl-carousel owl-loaded owl-drag">
                                <div class="owl-stage-outer">
                                    <div class="owl-stage">
                                        <div class="owl-item cloned">
                                            <li class="slide-item">
                                                <img src="" alt="" />
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-md-8 pt-4 pt-md-0">
                        <div class="features-text">
                            <div class="title">
                                <h5 class="s1 wow fadeInUp" data-wow-delay=".5s">
                                    <span>تطبيق جوال</span>
                                </h5>
                                <h2 class="wow fadeInUp heder1" data-wow-delay=".75s">
                                    قم بتنزيل التطبيق لطلب الطعام عبر الإنترنت
                                </h2>
                                <div class="small-border wow fadeInUp" data-wow-delay=".85s"></div>
                                <h3>التسليم والاستلام من أفضل المطاعم المحلية. الإفطار والغداء والعشاء وغير ذلك.</h3>
                                <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.</p>
                            </div>
                            <div className="action-btns mt-4 ">
                                <ul className="list-inline" >
                                    <li className="list-inline-item dd2">
                                        <a href="https://play.google.com/store/apps/details?id=com.tanfeed2021.matbahk24" className="d-flex align-items-center app-download-btn btn btn-brand d1">
                                            <span className="span-icon"><img src={image10} alt=".." className="img-icon" /></span>
                                            <div className="download-text text-left">
                                                <small className="s1" >تحميل من</small>
                                                <h5 className="s2">App Store</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="list-inline-item dd1">
                                        <a href="https://apps.apple.com/us/app/%D9%85%D8%B7%D8%A8%D8%AE-24/id1641282323" className="d-flex align-items-center app-download-btn btn btn-brand d1">
                                            <span className="span-icon"><img src={image9} alt=".." className="img-icon" /></span>
                                            <div className="download-text text-left">
                                                <small className="s1">تحميل من</small>
                                                <h5 className="s2">Google Play </h5>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features1;