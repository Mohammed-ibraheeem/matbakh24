import image1 from './image/banner2.png'
import image2 from './image/bg-banner-2.jpg'
import image3 from './image/banner1.png'
import image4 from './image/bg-banner-1.jpg'

import './css/Second.css'
function Second() {
    return (
        <>
            <section id="section-welcome" className="banners-two2" aria-label="section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6 div-1 ">
                            <a href="//" className="de-banner text-light aa1 ">
                                <img className="img-main" src={image1} alt="..." />
                                <div dir='rtl' className="div-content">
                                    <h4>عصير طازج</h4>
                                    <h3>مشروبات مجانية</h3>
                                    <div className="btn-main">اطلب الان</div>
                                    <br />
                                    <small> *عرض لوقت محدود </small>
                                </div>
                                <img className="img-main-1" src={image2} alt="..." />
                            </a>
                        </div>
                        <div className="col-lg-6 div-3">
                            <a href="//" className="de-banner text-light aa1 ">
                                <img className="img-main-3" src={image3} alt="..." />
                                <div dir='rtl' className="div-content-1">
                                    <h4>بيتزا لازانيا</h4>
                                    <h3>أشتري 1 و أحصل على 1</h3>
                                    <div className="btn-main">اطلب الان</div>
                                    <br />
                                    <small> *عرض لوقت محدود </small>
                                </div>
                                <img className="img-main-2" src={image4} alt="..." />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Second;