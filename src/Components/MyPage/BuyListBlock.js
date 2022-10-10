const BuyListBlock = () =>{

    return(
        <div className="tab-pane fade" id="buylistblock" role="tabpanel" aria-labelledby="buylistblock-tab">
            <div className="row justify-content-center p-5">
                <div className="col-3">
                    <img class="card-img-top" src="https://dummyimage.com/150x250/dee2e6/6c757d.jpg" alt="..." />
                </div>
                <div className="col-8">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="me-5">책 명</span>
                            <p>언제나 밤인 세계</p>
                        </li>
                        <li className="list-group-item">
                            <span className="me-5">가 격</span>
                            <p>30,000</p>
                        </li>
                        <li className="list-group-item">    
                            <span className="me-5">구매일</span>
                            <p>2022-09-13</p>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BuyListBlock