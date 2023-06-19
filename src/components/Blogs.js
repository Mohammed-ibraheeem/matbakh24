import './css/Blogs.css'
import image1 from './image/clock-five.png'
function Blogs() {
    return (
        <section dir='rtl' class="blogs-h">
            <div className="container">
                <div className="row">
                    <div class="col-md-12">
                        <div class="title title-center">
                            <h5 class="s1 wow fadeInUp" data-wow-delay=".5s">
                                <span>المدونات</span>
                            </h5>
                            <h2 class="wow fadeInUp" data-wow-delay=".75s">اخر المدونات</h2>
                            <div class="small-border wow fadeInUp" data-wow-delay=".85s"></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="news-block big-block">
                            <div class="img-block">
                                <a href=" " class="img" >
                                    <img src="" alt="#" />
                                </a>
                            </div>
                            <div class="details" >
                                <div class="info-blog">
                                    <ul>
                                        <li>
                                            <img src={image1} alt='...' className='clock-icon' />
                                            <span> يونيو 14, 2023 </span>
                                        </li>
                                    </ul>
                                </div>
                                <a href=" " class="name"> طريقة تحضير البرجر ملك الوجبات السريعة  </a>
                                <p>
                                    البرجر ملك الوجبات السريعة تم تسميته باسم هامبورجر نسبة إلى مدينة هامبورج الألمانية، وليس
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="news-block big-block">
                            <div class="img-block">
                                <a href=" " class="img" >
                                    <img src="" alt="#" />
                                </a>
                            </div>
                            <div class="details" >
                                <div class="info-blog">
                                    <ul>
                                        <li>
                                            <img src={image1} alt='...' className='clock-icon' />
                                            <span> يونيو 14, 2023 </span>
                                        </li>
                                    </ul>
                                </div>
                                <a href=" " class="name"> طريقة تحضير الكوكيز الحلوى الأشهر في العالم  </a>
                                <p>
                                    الكوكيز الحلوى الأشهر في العالم تعتبر الكوكيز من أشهر أنواع الحلويات المفضلة لدى الكثير
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="news-block big-block">
                            <div class="img-block">
                                <a href=" " class="img" >
                                    <img src="" alt="#" />
                                </a>
                            </div>
                            <div class="details" >
                                <div class="info-blog">
                                    <ul>
                                        <li>
                                            <img src={image1} alt='...' className='clock-icon' />
                                            <span> يونيو 14, 2023 </span>
                                        </li>
                                    </ul>
                                </div>
                                <a href=" " class="name"> قصة أهم طبق على المائدة "المحشي"  </a>
                                <p>
                                    قصة أهم طبق على المائدة "المحشي" يعتبر المحشي أكلة تركية في الأصل، وتعرف عليها                            </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="btn-center">
                            <a href=" " class="btn" >
                                <span>المزيد</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Blogs;