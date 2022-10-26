import BuyListBlock from "./BuyListBlock"
import ChangePwdBlock from "./ChangePwdBlock"
import RentalListBlock from "./RentalListBlock"
import SaleListBlock from "./SaleListBlock"
import "../Styles.css"
import UserDeleteBlock from "./UserDeleteBlock"

const MyPageForm = (props) =>{
    const {deleteform, deleteChange, userDelete, changeform, changeformChange, changeSubmit, userinfo} =props
    return(
        <div className="container py-5 mt-5">
            <div className="row">
                {/* side bar */}
                <div className="col-md-3 mt-5">
                    <div className="team-member bg-dark p-3" >
                        <img className="mx-auto rounded-circle" src="assets/img/profile-img.svg" alt="..."/>
                        <h4 class="">{userinfo.name}</h4>
                        <h4 class="">{userinfo.studentId}</h4>
                    </div>
                    <div className="bg-light">
                        <ul class="nav nav-tabs flex-column" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="buylistblock-tab" data-bs-toggle="tab" data-bs-target="#buylistblock" type="button" role="tab" aria-controls="buylistblock" aria-selected="true">구매 목록</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="rentallistblock-tab" data-bs-toggle="tab" data-bs-target="#rentallistblock" type="button" role="tab" aria-controls="rentallistblock" aria-selected="false">대여 목록</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="salelistblock-tab" data-bs-toggle="tab" data-bs-target="#salelistblock" type="button" role="tab" aria-controls="salelistblock" aria-selected="false">판매 목록</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="changepwdblock-tab" data-bs-toggle="tab" data-bs-target="#changepwdblock" type="button" role="tab" aria-controls="changepwdblock" aria-selected="false">개인 정보 수정</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="userdeleteblock-tab" data-bs-toggle="tab" data-bs-target="#userdeleteblock" type="button" style={{color:"red"}} role="tab" aria-controls="userdeleteblock" aria-selected="false">회원 탈퇴</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 주문배송 등등 */}
                <div class="col-md-9 bg-light mt-5">
                    <div className="row mt-5">
                        <div className="col">
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
                        <div className="col">
                            <div className="card text-center justify-content-center py-5">
                                <div className="card-block">
                                    <h5 className="mb-3">판매 건수</h5>
                                    <h1 class="fs-1">0</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>  
                    
                    <div class="tab-content">
                        <div class="tab-pane active" id="buylistblock" role="tabpanel" aria-labelledby="buylistblock-tab"><BuyListBlock/></div>

                        <div class="tab-pane" id="rentallistblock" role="tabpanel" aria-labelledby="rentallistblock"><RentalListBlock/></div>

                        <div class="tab-pane" id="salelistblock" role="tabpanel" aria-labelledby="salelistblock-tab"><SaleListBlock/></div>
                        
                        <div class="tab-pane" id="changepwdblock" role="tabpanel" aria-labelledby="changepwdblock-tab"><ChangePwdBlock changeform={changeform} changeformChange={changeformChange} changeSubmit={changeSubmit}/></div>

                        <div class="tab-pane" id="userdeleteblock" role="tabpanel" aria-labelledby="userdeleteblock-tab"><UserDeleteBlock deleteform={deleteform} deleteChange={deleteChange} userDelete={userDelete}/></div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default MyPageForm