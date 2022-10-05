

const ChangePwdModal = () =>{

    return(
        <div className="book-modal modal fade" id="changepwdmodal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal">
                    <img src="assets/img/close-icon.svg" alt="Close modal"/>
                    </div>
                    <div class="container">
                        {/* <div class="row justify-content-center align-items-center">/ */}
                            <form class="text-center">
                                <div class="row justify-content-center mb-4 mt-5">
                                    <div class="col-7">
                                        <div class="form-group">
                                            <input class="form-control" id="oldPwd" type="password" placeholder="old password"/>
                                            <div class="invalid-feedback">Password is not valid.</div>
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" id="newPwd" type="password" placeholder="new password"/>
                                            <div class="invalid-feedback">A new password is required.</div>
                                            <div class="invalid-feedback">Password is not valid.</div>
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" id="newPwdCheck" type="password" placeholder="new password"/>
                                            <div class="invalid-feedback">A new password is required.</div>
                                            <div class="invalid-feedback">Password is not valid.</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="text-center"><button class="btn btn-primary btn-ㅡ text-uppercase mb-4" id="submitButton" type="submit">비밀번호 변경</button></div> 
                            </form>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePwdModal