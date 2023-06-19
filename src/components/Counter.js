import image1 from './image/counter.jpg'
import image2 from './image/الطباخات.png'
import image3 from './image/السائقين-2.png'
import image4 from './image/العملاء.png'
import image5 from './image/أنواع-المطابخ.png'
import image6 from './image/أماكن-تواجدنا.png'
import image7 from './image/الطلبات.png'
import './css/Counter.css'
function Counter() {
    return (
        <>
            <section class="counter-section counter-h gradient-bg">
                <div class="overlay-img">
                    <img src={image1} alt="..." />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-6 col-lg-4">
                            <div class="text-white p-2 count-data text-center my-3">
                                <img src={image2} alt="..." class="icon-size-lg mb-2 im_icon" />
                                <h3 class="counter-item">700</h3>
                                <span>الطباخات</span>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4">
                            <div class="text-white p-2 count-data text-center my-3">
                                <img src={image3} alt="..." class="icon-size-lg mb-2 im_icon" />
                                <h3 class="counter-item">150</h3>
                                <span>السائقين</span>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4">
                            <div class="text-white p-2 count-data text-center my-3">
                                <img src={image4} alt="..." class="icon-size-lg mb-2 im_icon" />
                                <h3 class="counter-item">2,500</h3>
                                <span>مستخدمين التطبيق</span>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4">
                            <div class="text-white p-2 count-data text-center my-3">
                                <img src={image5} alt="..." class="icon-size-lg mb-2 im_icon" />
                                <h3 class="counter-item">20</h3>
                                <span>مطابخ</span>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4">
                            <div class="text-white p-2 count-data text-center my-3">
                                <img src={image6} alt="..." class="icon-size-lg mb-2 im_icon" />
                                <h3 class="counter-item">20</h3>
                                <span>أماكن تواجدنا</span>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4">
                            <div class="text-white p-2 count-data text-center my-3">
                                <img src={image7} alt="..." class="icon-size-lg mb-2 im_icon" />
                                <h3 class="counter-item">2,000</h3>
                                <span>عدد الطلبات</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Counter;