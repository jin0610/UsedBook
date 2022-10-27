import { useEffect } from "react"
import Api from "../../Api"


const ReservationBlock = (props) =>{
    const {index} = props
    // [{"id":2,"name":"이름1","title":"제목1","`publisher`":"출판사1","author":"저자1","image":"이미지1","publicationDate":"출판날짜1","price":12000,"content":"내용1","status":"RESERVATION","userId":"user1"}


    // const reservation = reservationList.map()
    return(
        <div className="tab-pane" id="reservationblock" role="tabpanel" aria-labelledby="reservationblock-tab">
            <div className="row justify-content-center p-5">
                <div className="col-3">
                    {/* info.name */}
                    <img class="card-img-top" src="https://dummyimage.com/150x250/dee2e6/6c757d.jpg" alt="..." />
                </div>
                <div className="col-8">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="me-5">책 명</span>
                            <p>{index.name}</p>
                        </li>
                        <li className="list-group-item">
                            <span className="me-5">저 자</span>
                            <p>{index.author}</p>
                        </li>
                        <li className="list-group-item">
                            <span className="me-5">가 격</span>
                            <p>{index.price}</p>
                        </li>
                        <li className="list-group-item">    
                            <span className="me-5">출판사</span>
                            <p>{index.publisher}</p>
                        </li>
                        <li className="list-group-item">    
                            <span className="me-5">출판날짜</span>
                            <p>{index.publicationDate}</p>
                        </li>                      
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ReservationBlock