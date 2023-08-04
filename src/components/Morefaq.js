import { Image } from "react-bootstrap";
import "./css/Navbas.css"
import image1 from './image/LOGO-1.png'
import Footer from "./Footer";
import image2 from './image/اسكرينة-سوال-وجواب.png'
import './css/Faq.css'
import './css/Header.css'
function Morefaq() {
    return (
        <>
            <header className="header ">
                <nav dir="rtl" className="navbar navbar-expand-lg fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="https://matbakh24.com">
                            <Image style={{ width: '105px', maxHeight: '90px', marginRight: '85px' }} src={image1} alt="logo" class="img-fluid" />
                        </a>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fal fa-bars">
                            </span>
                        </button>
                        <div className="navbar-collapse h-auto collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto menu">
                                <li>
                                    <a href="/#"> الرئيسية </a>
                                </li>
                                <li >
                                    <a className="page-scroll" href="/#"> من نحن </a>
                                </li>
                                <li >
                                    <a className="page-scroll" href="/#"> المدونة</a>
                                </li>
                                <li >
                                    <a className="page-scroll" href="/#"> شاشات </a>
                                </li>
                                <li >
                                    <a className="page-scroll" href="/#"> مطابخنا </a>
                                </li>
                                <li >
                                    <a className="page-scroll" href="/#"> عروضنا </a>
                                </li>
                                <li >
                                    <a className="page-scroll" href="/#">تواصل معنا </a>
                                </li>
                            </ul>
                            <a href="tel:920003266" className="blob-btn">
                                <span>920003266</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="main-content">
                <section className="section breadcrumb-area bg-overlay d-flex align-items-center" >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-content text-center">
                                    <h2 className="text-white text-capitalize">
                                        الأسئلة الشائعة
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                كيف يمكنني معرفة، ومتابعة حالة طلبي؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    يمكنك متابعة الطلب من خلال التطبيق الخاص بنا، عبر الضغط على سجل الطلبات.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                هل يوجد تطبيق خاص بالهواتف الذكية؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    نعم، يوجد تطبيق خاص بالهواتف الذكية، لأجهزة الأبل، والأندرويد، ويمكنك تحميلها من متجر التطبيقات، من خلال البحث بكلمة “مطبخ 24، أو بإمكانك تحميل التطبيق من خلال Google Play على لينك: shorturl.at/cnuKX
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                هل هناك نسخة للموقع خاصة بالهواتف الذكية؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    نعم، وسيتم تحويلك بشكل تلقائي لنسخة الموقع، عند دخولك لموقع مطبخ 24 من جهازك الذكي.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                الموقع لا يعمل على جهازي الشخصي، ما هي الاسباب؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    قد يكون أحد الأسباب، هو أن متصفح الموقع لا يدعم انترنت اكسبلور بنسخته السادسة أو أقل، وننصح باستخدام المتصفحات التالية، انترنت اكسبلور بنسخته الثامنة أو التاسعة، موزيلا، فايرفوكس، سفاري، أو كروم.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                ما هي البيانات المطلوبة ليتم قبولي؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    البيانات المطلوبة للتسجيل كمندوب، هي (الشهادة البنكية، صورة السيارة، رقم الهوية أو الإقامة، شهادة العمل الحر).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                ما هي اشتراطات المركبة التي يتم قبولها للعمل لديكم؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    لا يوجد اشتراطات لقبول العمل، لكن يجب ان تكون آمنه وصالحة للاستخدام، وتكون ضمن اشتراطات ضوابط إدارة المرور والمركبات.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                في حال عدم استكمال المستندات المطلوبة، هل يمكنني استكمال البيانات؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    نعم يمكنك، وسوف تصلك رسالة مرفق فيها الرابط الخاص بتسجيلك، ومن خلاله يمكنك استكمال بياناتك.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                هل تقبل المستندات في حال كانت نسخة مطبوعة (Scan)؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    لا تقبل في حالة Scan، أو تكون الصور غير واضحة.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                في حال كنت زائر للملكة العربية السعودية، هل يحق لي العمل؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    بحسب القوانين وأنظمة الدولة، يمنع عمل الزائر فيها.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                في حال أن لدي حساب مسبق ولا يعمل، ماذا علي أن أفعل؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    محاولة تحديث الحساب الخاص بيك مرة أحرى، وأن لم يتم تحديثه، يتم التواصل مع الدعم الفني على رقم 920003266.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                هل يوجد عمر معين للقبول بالعمل؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    يجب ان يكون العمر قانوني للعمل، وتحت طائلة المسؤولية.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                ما هي البيانات المطوبة ليتم قبولي؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    يمكن التسجيل كطباخة في التطبيق، بعد إتمام إرفاق صور شعار المطبخ، والشهادة البنكة، وشهادة العمل الحر، ويتم التواصل مع الطباخة، وإلتمام التسجيل بنجاح.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                هل يوجد شروط للتمكن من التسجيل؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    نعم يجب إرفاق صورة المطبخ، الشعار، شهادة الايبان، شهادة العمل الحر، رقم الهوية.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                كيف أستطيع استالم مبلغ الخدمة؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    التوزيع المالي يكون بطريقة تلقائية، يتم توزيعه عندما يقوم المستهلك بعملية إتمام الدفع، ويتم تحويل مبلغ قيمة الطباخة ومبلغ الخدمة التوصيل. على الحساب االيبان الموثق ببيانات حسابه.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                كم النسبة؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    نسبة الزيادة 10 %، ويتم دفعها المستهلك، ولا يوجد أي اقتطاع مبلغ مالي على الطباخة.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                هل يتم إرسال كمية يوميًا لمقركم، أم يكون استالمها مباشرة من المنزل؟
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    يكون استلامها مباشرة من المنزل.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-thumb mx-auto">
                                <img src={image2} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Morefaq;