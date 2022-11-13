
const logout = () =>{
    sessionStorage.clear()
    window.location.href = '/login' 
}

const ChangePwdBlock = (props) =>{
    const {changeform, changeformChange, changeSubmit}=props
    return(
        <div className="tab-pane" id="changepwdblock" role="tabpanel" aria-labelledby="changepwdblock-tab" onSubmit={changeSubmit}>
            <div className="py-5">
            <form class="row text-center justify-content-center">
                <div class="col-8">
                    <div class="form-group mb-3">
                        <input class="form-control" id="oldPwd" type="password" placeholder="old password" onChange={changeformChange} defaultValue={changeform.oldPwd}/>
                    </div>
                    <div class="form-group mb-3">
                        <input class="form-control" id="newPwd" type="password" placeholder="new password" onChange={changeformChange} defaultValue={changeform.newPwd}/>
                    </div>
                    <div class="form-group mb-3">
                        <input class="form-control" id="newPwdCheck" type="password" placeholder="new password check" onChange={changeformChange} defaultValue={changeform.newPwdCheck}/>
                    </div>
                </div>            

                <div class="text-center ">
                    <button class="btn btn-primary btn-ㅡ text-uppercase mb-4" id="submitButton" type="submit" onClick={logout}>비밀번호 변경</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default ChangePwdBlock