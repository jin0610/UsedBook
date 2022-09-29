import "./Styles.css"

const BookInfoForm = () =>{
    return(
        <section class="page-section">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6">
                        <img class="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." />
                    </div>
                    <div class="col-md-6">
                        <div class="small mb-1">단과대학 : 학과</div>
                        <h1 class="display-5 fw-bolder">book name</h1>
                        <div class="fs-5 mb-5">
                            <span>30,000</span>
                        </div>
                        <div class="d-flex">
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                대여 or 구매
                            </button>
                        </div>
                        <a class="nav-link" href="/mypage">modal.ver</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookInfoForm