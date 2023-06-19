import image1 from './image/اسكرينة-سوال-وجواب.png'
import './css/Faq.css'
function Faq() {
    return (
        <>
            <section className="section faq-area faq-h bg-gray">
                <div className="container">
                    <div dir='rtl' className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <div classNameName="title">
                                <h5 className="s1 wow fadeInUp" data-wow-delay=".5s">
                                    <span>
                                        الأسئلة الشائعة
                                    </span>
                                </h5>
                                <h2 className="wow fadeInUp" data-wow-delay=".75s"> </h2>
                                <div className="small-border wow fadeInUp" data-wow-delay=".85s"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="faq-content">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading1">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                ما هو تطبيق مطبخ 24؟
                                            </button>
                                        </h2>
                                        <div id="collapse1" className="accordion-collapse collapse  show  " aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام “هنا يوجد محتوى نصي، هنا يوجد محتوى نصي” فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading2">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                                هل تطبيق مطبخ 24 شركة لتوصيل الطعام؟
                                            </button>
                                        </h2>
                                        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام “هنا يوجد محتوى نصي، هنا يوجد محتوى نصي” فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading3">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                                ما هي ساعات عمل تطبيق مطبخ 24؟
                                            </button>
                                        </h2>
                                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام “هنا يوجد محتوى نصي، هنا يوجد محتوى نصي” فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading4">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                                                أين تقع مكاتب تطبيق مطبخ 24؟
                                            </button>
                                        </h2>
                                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    المناطق التي يتواجد بها التطبيق في هذه اللحظة، هي (الدمام – الخبر- الجبيل – القطيف – سيهات – الأحساء).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading5">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                                ما هي طريقة الدفع؟
                                            </button>
                                        </h2>
                                        <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    لدفع ببطاقة مدى، أو بطاقة ابل باي.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading6">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                                                هل يجب علي التسجيل لأتمكن من الطلب؟
                                            </button>
                                        </h2>
                                        <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    نعم، يجب التسجيل بالموقع، لإتمام عملية الطلب، حيث يتطلب وجود رقم جوال فعال، عنوان التوصيل.                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                هل يوجد رسوم على الخدمة أو على خدمة التوصيل؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    تعتمد رسوم التوصيل على المندوب الأقرب إليك، والمتاح لاستقبال طلبك، ويتم احتساب الرسوم حسب المسافة.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-thumb mx-auto">
                                <img src={image1} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="btn-center">
                                <a href=' ' className="btn">
                                    <span>المزيد</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Faq;