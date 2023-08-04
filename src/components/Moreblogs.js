import Footer from "./Footer";
import Navbar from "./Navbar";
import image1 from './image/clock-five.png'
import image2 from './image/5c7daebf5e6db642620556.jpeg'
import image3 from './image/FP_0n5GXEAMDDNG.jpg'
import image4 from './image/Suadi-Kaabsa.jpg.jpeg'
import image5 from './image/burger.png'
import image6 from './image/cookies.png'
import image7 from './image/محشي.png'
import image8 from './image/makdous.png'
import './css/Blogs.css'
import Header from "./Header";

function Moreblogs() {
    return (
        <section className="mmm pt-5">
            <Navbar />
            <Header />
            <section dir='rtl' className="blogs-h">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title title-center">
                                <h5 className="s1 wow fadeInUp" data-wow-delay=".5s">
                                    <span>المدونات</span>
                                </h5>
                                <h2 className="wow fadeInUp" data-wow-delay=".75s">اخر المدونات</h2>
                                <div className="small-border wow fadeInUp" data-wow-delay=".85s"></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-block big-block">
                                <div className="img-block">
                                    <a href=" " className="img" >
                                        <img src={image5} alt="#" />
                                    </a>
                                </div>
                                <div className="details" >
                                    <div className="info-blog">
                                        <ul>
                                            <li>
                                                <img src={image1} alt='...' className='clock-icon' />
                                                <span> يونيو 14, 2023 </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <a href=" " className="name"> طريقة تحضير البرجر ملك الوجبات السريعة  </a>
                                    <p>
                                        البرجر ملك الوجبات السريعة تم تسميته باسم هامبورجر نسبة إلى مدينة هامبورج الألمانية، وليس
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-block big-block">
                                <div className="img-block">
                                    <a href=" " className="img" >
                                        <img src={image6} alt="#" />
                                    </a>
                                </div>
                                <div className="details" >
                                    <div className="info-blog">
                                        <ul>
                                            <li>
                                                <img src={image1} alt='...' className='clock-icon' />
                                                <span> يونيو 14, 2023 </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <a href=" " className="name"> طريقة تحضير الكوكيز الحلوى الأشهر في العالم  </a>
                                    <p>
                                        الكوكيز الحلوى الأشهر في العالم تعتبر الكوكيز من أشهر أنواع الحلويات المفضلة لدى الكثير
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-block big-block">
                                <div className="img-block">
                                    <a href=" " className="img" >
                                        <img src={image7} alt="#" />
                                    </a>
                                </div>
                                <div className="details" >
                                    <div className="info-blog">
                                        <ul>
                                            <li>
                                                <img src={image1} alt='...' className='clock-icon' />
                                                <span> يونيو 14, 2023 </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <a href=" " className="name"> قصة أهم طبق على المائدة "المحشي"  </a>
                                    <p>
                                        قصة أهم طبق على المائدة "المحشي" يعتبر المحشي أكلة تركية في الأصل، وتعرف عليها                            </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-block big-block">
                                <div className="img-block">
                                    <a href=" " className="img" >
                                        <img src={image8} alt="#" />
                                    </a>
                                </div>
                                <div className="details" >
                                    <div className="info-blog">
                                        <ul>
                                            <li>
                                                <img src={image1} alt='...' className='clock-icon' />
                                                <span> يونيو 14, 2023 </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <a href=" " className="name">
                                        طريقة تحضير المكدوس الطبق الشعبي الأول في الشام
                                    </a>
                                    <p>
                                        المكدوس الطبق الشعبي الأول في الشام هو أحد أهم الأكلات المشهورة بشكل كبير جدًا
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-block big-block">
                                <div className="img-block">
                                    <a href=" " className="img" >
                                        <img src={image2} alt="#" />
                                    </a>
                                </div>
                                <div className="details" >
                                    <div className="info-blog">
                                        <ul>
                                            <li>
                                                <img src={image1} alt='...' className='clock-icon' />
                                                <span> يونيو 14, 2023 </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <a href=" " className="name">
                                        ما الذي يجب أن تعرفه عن المطبخ الهندي؟
                                    </a>
                                    <p>
                                        المطبخ الهندي يعتبر المطبخ الهندي من أشهر وأقدم المطابخ في العالم، حيث انتشرت ثقافة
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-block big-block">
                                <div className="img-block">
                                    <a href=" " className="img" >
                                        <img src={image3} alt="#" />
                                    </a>
                                </div>
                                <div className="details" >
                                    <div className="info-blog">
                                        <ul>
                                            <li>
                                                <img src={image1} alt='...' className='clock-icon' />
                                                <span> يونيو 14, 2023 </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <a href=" " className="name">
                                        حكاية أهم مطبخ في العالم “المطبخ الإيطالي”
                                    </a>
                                    <p>
                                        المطبخ الإيطالي انتشر المطبخ الإيطالي في جميع أنحاء العالم، وأصبح من أهم المطابخ المميزة
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-block big-block">
                                <div className="img-block">
                                    <a href=" " className="img" >
                                        <img src={image4} alt="#" />
                                    </a>
                                </div>
                                <div className="details" >
                                    <div className="info-blog">
                                        <ul>
                                            <li>
                                                <img src={image1} alt='...' className='clock-icon' />
                                                <span> يونيو 14, 2023 </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <a href=" " className="name">
                                        الكبسة السعودية
                                    </a>
                                    <p>
                                        الكبسة السعودية تعتبر الكبسة من أشهر الأكلات الشعبية السعودية، وفي العادة يتم تقديمها في
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </section>
    )
}
export default Moreblogs;