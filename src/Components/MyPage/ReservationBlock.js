const ReservationBlock = (props) =>{
    const {index} = props

    return(
        <div className="tab-pane" id="reservationblock" role="tabpanel" aria-labelledby="reservationblock-tab">
            <div className="row justify-content-center p-5">
                <div className="col-3">
                    {/* info.name */}
                    <img class="card-img-top" src={index.bookDto.image} alt="..." />
                </div>
                <div className="col-8">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="me-5">책 명</span>
                            <p>{index.bookDto.name}</p>
                        </li>
                        <li className="list-group-item">
                            <span className="me-5">저 자</span>
                            <p>{index.bookDto.author}</p>
                        </li>
                        <li className="list-group-item">
                            <span className="me-5">가 격</span>
                            <p>{index.bookDto.price}</p>
                        </li>
                        <li className="list-group-item">    
                            <span className="me-5">출판사</span>
                            <p>{index.bookDto.publisher}</p>
                        </li>
                        <li className="list-group-item">    
                            <span className="me-5">출판날짜</span>
                            <p>{index.bookDto.publicationDate}</p>
                        </li>                      
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ReservationBlock