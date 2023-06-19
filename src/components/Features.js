import image1 from './image/لماذ-تطبيق-مطبخ؟-1.png'
import image2 from './image/توافر-خرائط-متكاملة.png'
import image3 from './image/طعام-منزلي-صحي.png'
import image4 from './image/التجهيز-الكامل.png'
import image5 from './image/دعم-الأسر-المنتجة.png'
import image6 from './image/دعم-الشباب.png'
import image7 from './image/تحديد-أسعار-الوجبات-مسبقًا.png'
import image8 from './image/متابعة-حالة-الطلب.png'
import image9 from './image/google-play.png'
import image10 from './image/apple-logo (1).png'
import './css/Features.css'
function Features() {
    return (
        <section id="why" className="section why-h bg-gray">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-10">
                        <div className="title title-center">
                            <h5 class="s1 wow fadeInUp" data-wow-delay=".5s">
                                <span>تطبيق جوال</span>
                            </h5>
                            <h2 class="wow fadeInUp " data-wow-delay=".75s">
                                لماذا تطبيق مطبخ 24/7؟
                            </h2>
                            <div class="small-border wow fadeInUp" data-wow-delay=".85s">
                            </div>
                        </div>
                    </div>
                    <div dir='rtl' class="row">
                        <div class="col-12 col-md-4">
                            <div class="img-why">
                                <img src={image1} alt="..." />
                            </div>
                        </div>
                        <div class="col-12 col-md-8 pt-4 pt-md-0">
                            <ul class="features-item row">
                                <li class="col-md-6">
                                    <div class="image-box media icon-1 px-1 py-3 py-md-4 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.2s">
                                        <div class="featured-img mr-3">
                                            <img class="avatar-sm" src={image2} alt="..." />
                                        </div>
                                        <div class="icon-text media-body align-self-center align-self-md-start">
                                            <h3 class="mb-2">توافر خرائط متكاملة</h3>
                                            <p> تستطيع اختيار مكانك من على الخريطة، وإعطاء أمر التوصيل الخاص بك، وتتبع حالة طلبك.</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-6">
                                    <div class="image-box media icon-1 px-1 py-3 py-md-4 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.2s">
                                        <div class="featured-img mr-3">
                                            <img class="avatar-sm" src={image3} alt="..." />
                                        </div>
                                        <div class="icon-text media-body align-self-center align-self-md-start">
                                            <h3 class="mb-2">طعام منزلي صحي</h3>
                                            <p>تقديم طعام منزلي صحي للعميل، يناسب ذوقه من جميع مطابخ العالم.</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-6">
                                    <div class="image-box media icon-1 px-1 py-3 py-md-4 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.2s">
                                        <div class="featured-img mr-3">
                                            <img class="avatar-sm" src={image4} alt="..." />
                                        </div>
                                        <div class="icon-text media-body align-self-center align-self-md-start">
                                            <h3 class="mb-2">التجهيز الكامل</h3>
                                            <p>التجهيز الكامل لكافة العزومات، والمناسبات، وحفلات الزفاف، بأكبر تشكيلة من الطعام الفاخر، والحلويات اللذيذة.</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-6">
                                    <div class="image-box media icon-1 px-1 py-3 py-md-4 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.2s">
                                        <div class="featured-img mr-3">
                                            <img class="avatar-sm" src={image5} alt="..." />
                                        </div>
                                        <div class="icon-text media-body align-self-center align-self-md-start">
                                            <h3 class="mb-2">دعم الأسر المنتجة</h3>
                                            <p>دعم الأسر المنتجة عن طريق منح الطهاة المبدعين فرصة الطهي، وتقديم طعامهم من خلال تطبيق مطبخ 24.</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-6">
                                    <div class="image-box media icon-1 px-1 py-3 py-md-4 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.2s">
                                        <div class="featured-img mr-3">
                                            <img class="avatar-sm" src={image6} alt="..." />
                                        </div>
                                        <div class="icon-text media-body align-self-center align-self-md-start">
                                            <h3 class="mb-2">دعم الشباب</h3>
                                            <p>دعم الشباب وتقديم لهم فرصة لزيادة دخلهم، من خلال توفير فرص عمل مناديب توصيل بتطبيق مطبخ 24.</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-6">
                                    <div class="image-box media icon-1 px-1 py-3 py-md-4 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.2s">
                                        <div class="featured-img mr-3">
                                            <img class="avatar-sm" src={image7} alt="..." />
                                        </div>
                                        <div class="icon-text media-body align-self-center align-self-md-start">
                                            <h3 class="mb-2">تحديد أسعار الوجبات مسبقًا</h3>
                                            <p>يتم تحديد أسعار الوجبات مسبقًا، مما يعطي العميل الحق في اختيار السعر المناسب له، من بين مزودي الخدمات المتعددين.</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-6">
                                    <div class="image-box media icon-1 px-1 py-3 py-md-4 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.2s">
                                        <div class="featured-img mr-3">
                                            <img class="avatar-sm" src={image8} alt="..." />
                                        </div>
                                        <div class="icon-text media-body align-self-center align-self-md-start">
                                            <h3 class="mb-2">متابعة حالة الطلب</h3>
                                            <p>متابعة حالة الطلب، من خلال محادثة مفتوحة مع المندوب الخاص بتوصيل طلبك.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
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
    );
}
export default Features;