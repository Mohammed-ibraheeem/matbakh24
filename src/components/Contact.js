import './css/Contact.css'
function Contact() {
    return (
        <>
            <section id="contact" class="contact-us-section contact-h">
                <div class="container">
                    <div class="row justify-content-around">
                        <div class="col-md-12">
                            <div class="title">
                                <h5 class="s1 wow fadeInUp" data-wow-delay=".5s">
                                    <span>تواصـل معـنا</span>
                                </h5>
                                <h2 class="wow fadeInUp" data-wow-delay=".75s">تواصل معنا الان</h2>
                                <div class="small-border wow fadeInUp" data-wow-delay=".85s"></div>
                            </div>
                            <div class="contact-us-form gray-light-bg rounded p-5">
                                <h4>على استعداد للبدء؟</h4>
                                <div class="wpcf7 js" id="wpcf7-f350-o1" lang="ar" dir="rtl">
                                    <div class="screen-reader-response">
                                        <p role="status" aria-live="polite" aria-atomic="true"></p>
                                        <ul></ul>
                                    </div>
                                    <form action="/#wpcf7-f350-o1" method="post" class="wpcf7-form init contact-us-form" id="contactForm" aria-label="نموذج الاتصال" novalidate="novalidate" data-status="init">
                                        <div style={{ display: "none" }}>
                                            <input type="hidden" name="_wpcf7" value="350" />
                                            <input type="hidden" name="_wpcf7_version" value="5.7.5.1" />
                                            <input type="hidden" name="_wpcf7_locale" value="ar" />
                                            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f350-o1" />
                                            <input type="hidden" name="_wpcf7_container_post" value="0" />
                                            <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                                        </div>
                                        <div class="form-row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <span class="wpcf7-form-control-wrap" data-name="your-name">
                                                        <input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="الاسم" type="text" name="your-name" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <span class="wpcf7-form-control-wrap" data-name="your-email">
                                                        <input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-invalid="false" placeholder="البريد الإلكتروني" type="email" name="your-email" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <span class="wpcf7-form-control-wrap" data-name="your-message">
                                                        <textarea cols="7" rows="25" class="wpcf7-form-control wpcf7-textarea form-control" id="message" aria-invalid="false" placeholder="الرسالة" name="your-message" ></textarea>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 mt-3">
                                                <button type="submit" class="btn btn-brand wpcf7-form-control wpcf7-submit " id="btnContactUs">
                                                    إرسـال
                                                </button>
                                            </div>
                                        </div>
                                        <div class="wpcf7-response-output" aria-hidden="true"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;