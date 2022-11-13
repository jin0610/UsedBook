const UserDeleteBlock = (props) =>{
    const {deleteform, deleteChange} = props
    const logout = () =>{
        window.location.href = '/'
        sessionStorage.clear()
        console.log("로그아웃")
    }
    return(
        <div className="tab-pane" id="userdeleteblock" role="tabpanel" aria-labelledby="userdeleteblock-tab">
            <div className="py-5">
            <form className="row text-center justify-content-center">
                <div className="col-8">
                    <div className="form-group mb-3">
                        <input className="form-control" id="std_num" type="text" placeholder="student number" onChange={deleteChange} value={deleteform.std_num || ''}/>
                    </div>
                    <div className="form-group mb-3">
                        <input className="form-control" id="password" type="password" placeholder="password" onChange={deleteChange} value={deleteform.password || ''}/>
                    </div>
                </div>            

                <div className="text-center ">
                    <li className="btn btn-primary btn-ㅡ text-uppercase mb-4" id="submitButton2"  onClick={logout}><a href="/" onClick={logout} style={{color:"red"}}>회원 탈퇴</a></li>
                </div>
            </form>
            </div>
        </div>
    )
}

export default UserDeleteBlock