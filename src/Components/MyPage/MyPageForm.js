import ChangePwdBlock from "./ChangePwdBlock"
import "../Styles.css"
import UserDeleteBlock from "./UserDeleteBlock"
import ReservationBlock from "./ReservationBlock"
import ReservedBlock from "./ReservedBlock"
import WriteListBlock from "./WriteListBlock"
import BookEditModal from "./BookEditModal"

const MyPageForm = (props) =>{
    const {deleteform, deleteChange, userDelete, changeform, changeformChange, changeSubmit, userinfo, reservationList, writeList,reservedList} =props
    
    const reservation = reservationList.map((index)=>{
        return <ReservationBlock key={index.bookDto.id} index={index}/>
    })

    const writeModal = writeList.map(index=>{
        return <BookEditModal key={index.id} id ={index.id} index={index}/>
    })

    const write =writeList.map(index =>{
        return <WriteListBlock key={index.id} index={index} writeModal={writeModal}/>
    })

    

    const reserved =reservedList.map(index =>{
        return <ReservedBlock key={index.bookDto.id} index={index}/>
    })

    return(
         // <div className="container py-5 mt-5">
        <>
        <section class="bg-dark py-5" id="search">
                <div class="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white mb-5">
                        <h1 className="display-4 fw-bolder">MY PAGE</h1>
                    </div>
                </div>
        </section>

            <div className="row">
                {/* side bar */}
                <div className="col-md-3 mt-5 side">
                    <div className="team-member bg-dark p-3" >
                        <img className="mx-auto rounded-circle" src="assets/img/profile-img.svg" alt="..."/>
                        <h4 class="">{userinfo.name}</h4>
                        <h4 class="">{userinfo.studentId}</h4>
                    </div>
                    <div className="bg-dark team-size">
                        <ul class="nav nav-tabs flex-column" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="reservationblock-tab" data-bs-toggle="tab" data-bs-target="#reservationblock" type="button" role="tab" aria-controls="reservationblock" aria-selected="true">예약한 목록</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="reservedblock-tab" data-bs-toggle="tab" data-bs-target="#reservedblock" type="button" role="tab" aria-controls="reservedblock" aria-selected="false">예약 받은 목록</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="writelistblock-tab" data-bs-toggle="tab" data-bs-target="#writelistblock" type="button" role="tab" aria-controls="writelistblock" aria-selected="false">작성한 책 목록</a>
                            </li>
                            
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="changepwdblock-tab" data-bs-toggle="tab" data-bs-target="#changepwdblock" type="button" role="tab" aria-controls="changepwdblock" aria-selected="false">개인 정보 수정</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="userdeleteblock-tab" data-bs-toggle="tab" data-bs-target="#userdeleteblock" type="button" style={{color:"lightcoral"}} role="tab" aria-controls="userdeleteblock" aria-selected="false" >회원 탈퇴</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 주문배송 등등 */}
            
                <div class="col-md-6 bg-light mt-5 side2">
                
                    <div class="tab-content mt-5">
                        <div class="tab-pane active" id="reservationblock" role="tabpanel" aria-labelledby="reservationblock-tab">{reservation}</div>

                        <div class="tab-pane" id="reservedblock" role="tabpanel" aria-labelledby="reservedblock-tab">{reserved}</div>

                        <div class="tab-pane" id="writelistblock" role="tabpanel" aria-labelledby="writelistblock-tab">{write}</div>

                        
                        <div class="tab-pane" id="changepwdblock" role="tabpanel" aria-labelledby="changepwdblock-tab"><ChangePwdBlock changeform={changeform} changeformChange={changeformChange} changeSubmit={changeSubmit}/></div>

                        <div class="tab-pane" id="userdeleteblock" role="tabpanel" aria-labelledby="userdeleteblock-tab"><UserDeleteBlock deleteform={deleteform} deleteChange={deleteChange} userDelete={userDelete}/></div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default MyPageForm