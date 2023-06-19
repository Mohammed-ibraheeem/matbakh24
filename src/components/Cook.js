import image1 from "./image/البهارات-و-القهوة.jpg"
import image2 from "./image/الفطار.jpg"
import image3 from "./image/المشويات.jpg"
import './css/Cook.css'
function Cook() {
    return (
        <>
            <section class="cook-h">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title title-center">
                                <h5 class="s1 wow fadeInUp" data-wow-delay=".5s">
                                    <span>مطابخنا</span>
                                </h5>
                                <h2 class="wow fadeInUp" data-wow-delay=".75s">مطابخنا الحديثة</h2>
                                <div class="small-border wow fadeInUp" data-wow-delay=".85s">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <a href=" " class="cook-block">
                                <div class="img-block">
                                    <img src={image1} alt="..." />
                                </div>
                                <div class="details">
                                    <h3>اختار على مزاج من أجود البهارات والقهوة</h3>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href=" " class="cook-block">
                                <div class="img-block">
                                    <img src={image2} alt="..." />
                                </div>
                                <div class="details">
                                    <h3>اختار على مزاج من أجود البهارات والقهوة</h3>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href=" " class="cook-block">
                                <div class="img-block">
                                    <img src={image3} alt="..." />
                                </div>
                                <div class="details">
                                    <h3>اختار على مزاج من أجود البهارات والقهوة</h3>
                                </div>
                            </a>
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
        </>
    )
}
export default Cook;