const BookInfoModal = (props) =>{
    const {bookIndex} = props
    return(
        <div className="book-modal modal fade" id="bookinfo" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal">
                    <img src="assets/img/close-icon.svg" alt="Close modal"/>
                    </div>
                    <div class="container">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-4">
                                <img class="img-fluid d-block mx-auto" src="https://dummyimage.com/480x700/dee2e6/6c757d.jpg" alt="..." />
                            </div>

                            <div class="col-lg-3">
                                <h2 class="text-uppercase">Book Name</h2>
                                <div class="fs-5 mb-5"><span>30,000</span></div>
                                <button class="btn btn-primary btn-m text-uppercase" type="button">구매</button>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookInfoModal