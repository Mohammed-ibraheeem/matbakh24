import './css/Header.css'
function Header() {
    return (
        <>
            <main className="main-content">
                <section className="section breadcrumb-area bg-overlay d-flex align-items-center" >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-content text-center">
                                    <h2 className="text-white text-capitalize">المدونة</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Header;