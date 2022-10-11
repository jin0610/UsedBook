

const UserDeleteBlock = (props) =>{
    const {deleteform, deleteChange, userDelete} = props
    
    return(
        <div className="tab-pane" id="userdeleteblock" role="tabpanel" aria-labelledby="userdeleteblock-tab">
            <div className="py-5">
            <form class="row text-center justify-content-center" onSubmit={userDelete}>
                <div class="col-8">
                    <div class="form-group mb-3">
                        <input class="form-control" id="std_num" type="text" placeholder="student number" onChange={deleteChange} value={deleteform.std_num}/>
                    </div>
                    <div class="form-group mb-3">
                        <input class="form-control" id="password" type="password" placeholder="password" onChange={deleteChange} value={deleteform.password}/>
                    </div>
                </div>            

                <div class="text-center ">
                    <button class="btn btn-primary btn-ㅡ text-uppercase mb-4" id="submitButton2" type="submit" style={{color:"red"}}>회원 탈퇴</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default UserDeleteBlock