import "./Styles.css"

const modaltest =() =>{
    return(
        <div class="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content " >
                    <div class="close-modal" data-bs-dismiss="modal">
                        <img src="assets/img/close-icon.svg" alt="Close modal"/></div>
                    <div class="container">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-lg-4">
                                <img class="img-fluid  d-block  mx-auto" src="https://dummyimage.com/480x700/dee2e6/6c757d.jpg" alt="..." />
                            </div>

                            <div class="col-lg-4">
                                <h2 class="text-uppercase">Book Name</h2>
                                <div class="fs-5 mb-5"><span>30,000</span></div>
                                <button class="btn btn-primary btn-xl text-uppercase" type="button">구매 또는 대여</button>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default modaltest