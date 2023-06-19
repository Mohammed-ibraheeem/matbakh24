import './css/About.css'
import imge1 from './image/5-web-clients.jpg'
import imge2 from './image/5-web-drivers.jpg'
import imge3 from './image/5-web-chef.jpg'
function About() {
    return (
        <>
            <section dir='rtl' class="section about-area about-h" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div class="img-h">
                                <img src={imge1} alt="..." className='move-image' />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <ul class="cele-list">
                                <li>
                                    <div class="cel-content">
                                        <p>
                                            <h4 class="gen-title">عملاء</h4>
                                        </p>
                                        <p id="user-desc"> </p>
                                        <p>
                                            <span >
                                                تستطيع استخدام تطبيق مطبخ 24 من على جوالك على مدار الأسبوع، لطلب الطعام المنزلي الذي تحبه أنت وعائلتك:
                                            </span>
                                        </p>
                                        <ul>
                                            <li>
                                                <span>
                                                    كل ما عليك هو البحث عن أقرب المطابخ القريبة منك، لسرعة التسليم.
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    ثم تختار طعامك المفضل، وتحديد وقت التسليم الذي يناسب.
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    ثم تأكيد طلب الوجبة، ودفع ثمنها.
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    الآن يمكنك متابعة حالة طلبك من على التطبيق، ومعرفة وقت الوصول أيضًا.
                                                </span>                                            </li>
                                            <li>
                                                <span>
                                                    كما أنك تستطيع كتابة ملاحظاتك حول تجربتك مع استخدام تطبيق مطبخ 24.
                                                </span>
                                            </li>
                                        </ul>
                                        <p>
                                            <span >سجل الآن وانضم لنا … </span>
                                        </p>
                                        <a href="https://matbakh.kodsolutions.net/" class="btn mt-2">
                                            <span className='btn-1'>سجل الآن وانضم إلينا</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-12 col-md-6">
                            <ul class="cele-list">
                                <li>
                                    <div class="cel-content">
                                        <p>
                                            <h4 class="gen-title">السائقين</h4>
                                        </p>
                                        <p id="user-desc"> </p>
                                        <p>
                                            <span >
                                                تستطيع الآن زيادة دخلك بشكل أسهل مع تطبيق مطبخ 24، بتوصيل الطعام إلى العملاء، حيث تكون مسؤوليتك هي:
                                            </span>
                                        </p>
                                        <ul>
                                            <li>
                                                <span>
                                                    البحث في التطبيق عن الطلبات التي تحتاج إلى توصيل.
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    إحضار وجبات العملاء من أماكن المطابخ.
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    ثم تأكيد طلب الوجبة، ودفع ثمنها.

                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    تسليم وجبات العملاء إلى أبواب عناوينهم.
                                                </span>
                                            </li>
                                        </ul>
                                        <p>
                                            <span>سجل الآن وانضم لنا … </span>
                                        </p>
                                        <a href="https://matbakh.kodsolutions.net/" class="btn mt-2">
                                            <span className='btn-1'>سجل الآن وانضم إلينا</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="img-h">
                                <img src={imge2} alt="..." className='move-image' />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div class="img-h">
                                <img src={imge3} alt="..." className='move-image' />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <ul class="cele-list">
                                <li>
                                    <div class="cel-content">
                                        <p>
                                            <h4 class="gen-title">أسر منتجة</h4>
                                        </p>
                                        <p id="user-desc"> </p>
                                        <p>
                                            <span >
                                                الآن تقدري تستغلي موهبتك في الطهي، وتزيدي من دخلك بشكل بسيط مع تطبيق مطبخ 24، حيث تكون مهمتك هي:
                                            </span>
                                        </p>
                                        <ul>
                                            <li>
                                                <span>
                                                    تحديد موقع مطبخك، حتى يستطيع العميل طلب الطعام من أقرب مطبخ له.
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    عرض كل ما تصنعيه من طعام منزلي، في كل مطبخ خاص به.
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    التأكد من جودة الطعام المطبوخ، حتى لا تحدث أى مشاكل.
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    التأكد من طلبات الطعام الخاص بك في التطبيق.
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    قبول أو رفض طلب الطعام، مع العلم بأنه عند قبول الطلب من الضروري تسليم الطعام للعميل في الوقت المحدد.
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    تسليم وجبة الطعام للمندوب، لتوصيلها إلى العميل.
                                                </span>
                                            </li>
                                        </ul>
                                        <p>
                                            <span>سجل الآن وانضم لنا … </span>
                                        </p>
                                        <a href="https://matbakh.kodsolutions.net/" class="btn mt-2">
                                            <span className='btn-1'>سجل الآن وانضم إلينا</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;