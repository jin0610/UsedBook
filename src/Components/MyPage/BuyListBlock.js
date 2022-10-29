const BuyListBlock = (props) =>{
    const {index} = props

    return(
        <div className="tab-pane" id="buylistblock" role="tabpanel" aria-labelledby="buylistblock-tab">
            <div className="row justify-content-center p-5">
                <div className="col-3">
                    <img class="card-img-top" src={index.image} alt="..." />
                </div>
                <div className="col-8">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="me-5">책 명</span>
                            <p>{index.name}</p>
                        </li>
                        <li className="list-group-item">
                            <span className="me-5">가 격</span>
                            <p>{index.price}</p>
                        </li>
                        <li className="list-group-item">    
                            <span className="me-5">구매일</span>
                            <p>{index.publiserDate}</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="">
                        <img src="assets/icon/edit_icon.svg"/>
                        <img src="assets/icon/delete_icon.svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyListBlock