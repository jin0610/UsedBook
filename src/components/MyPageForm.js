import BuyListBlock from "./BuyListBlock"
import ChangePwdBlock from "./ChangePwdBlock"
import RentalListBlock from "./RentalListBlock"
import SaleListBlock from "./SaleListBlock"
import "./Styles.css"

const MyPageForm = () =>{
    return(
        <div className="container py-5 mt-5">
            <div className="row">
                <div className="col-md-3 mt-5">
                    <div className="team-member bg-dark p-3" >
                        <img className="mx-auto rounded-circle" src="assets/img/profile-img.svg" alt="..."/>
                        <h4 class="">00000000</h4>
                    </div>
                    <div className="bg-light" >
                        <ul className="list-group">
                            <li className="list-group-item"><a className="list-group-item-action" href="#changepwdblock">구매 목록</a></li>
                            <li className="list-group-item"><a className="list-group-item-action" href="#buylist">대여 목록</a></li>
                            <li className="list-group-item"><a className="list-group-item-action" href="#buylist">판매 목록</a></li>
                            <li className="list-group-item"><a className="list-group-item-action" href="#infoChange">개인 정보 수정</a></li>
                        </ul>
                    </div>
                </div>
                {/* 주문배송 등등 */}
                <div class="col-md-9 bg-light">
                    <div className="row mt-5">
                        <div className="col ">
                            <div className="card text-center justify-content-center py-5">
                                <div className="card-block">
                                    <h5 className="mb-3">구매 건수</h5>
                                    <h1 class="fs-1">0</h1>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card text-center justify-content-center py-5">
                                <div className="card-block">
                                    <h5 className="mb-3">대여 건수</h5>
                                    <h1 class="fs-1">0</h1>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card text-center justify-content-center py-5">
                                <div className="card-block">
                                    <h5 className="mb-3">판매 건수</h5>
                                    <h1 class="fs-1">0</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>  
                    <hr/>
                    <section>
                        <ChangePwdBlock/>
                        <BuyListBlock/>
                        <RentalListBlock/>
                        <SaleListBlock/>
                    </section>

                </div>

            </div>
            
        </div>
    )
}

export default MyPageForm