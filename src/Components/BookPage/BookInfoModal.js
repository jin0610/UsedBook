const BookInfoModal = (props) =>{
    const {bookIndex, info, reservationClick, closeModal } = props
    console.log(info)
    return(
        <div className="book-modal modal fade" id="bookinfo" tabIndex="-1" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal" >
                    <img src="assets/img/close-icon.svg" alt="Close modal"/>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-4">
                                <img className="img-fluid d-block mx-auto" src={info.image} alt="..." />
                            </div>

                            <div className="col-lg-3">
                                <h3 className="text-uppercase">{info.name}</h3>
                                <div className="fs-5 mb-2"><span>{info.author}</span></div>
                                <div className="fs-5 mb-2"><span>{info.price}</span></div>
                                <div className="fs-5 mb-2"><span>{info.publisher}</span></div>
                                <div className="fs-5 mb-5"><span>{info.publicationDate}</span></div>
                                {info.status==="SELL"?
                                    <button className="btn btn-primary btn-m text-uppercase" type="button" onClick={reservationClick}>구매</button>
                                :<button className="btn btn-primary btn-m text-uppercase" type="button" onClick={reservationClick}>대여</button>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookInfoModal