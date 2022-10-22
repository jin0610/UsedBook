const BookInfoModal = (props) =>{
    const {bookIndex, info} = props
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
                                <img class="img-fluid d-block mx-auto" src={info.img} alt="..." />
                            </div>

                            <div class="col-lg-3">
                                <h2 class="text-uppercase">{info.title}</h2>
                                <div class="fs-5 mb-2"><span>{info.author}</span></div>
                                <div class="fs-5 mb-2"><span>{info.price}</span></div>
                                <div class="fs-5 mb-2"><span>{info.publisher}</span></div>
                                <div class="fs-5 mb-5"><span>{info.publicationDate}</span></div>
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