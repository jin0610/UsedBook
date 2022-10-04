

const ChangePwdModal = () =>{

    return(
        <div className="book-modal modal fade" id="changepwdmodal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal">
                    <img src="assets/img/close-icon.svg" alt="Close modal"/>
                    </div>
                    <div class="container">
                        <form class="row justify-content-center">
                            <div class="col-lg-5 text-center">
                                <h2>책 등록</h2>
                                <div className="row justify-content-center mb-4 mt-5">
                                    
                                    <div className="col-8">
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="password" id="oldpwd" placeholder="old password"/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="password" id="newpwd" placeholder="new password"/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="password" id="newpwdcheck" placeholder="new password check"/>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-m text-uppercase" type="button">등록</button> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePwdModal