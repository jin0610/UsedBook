const LoginModal = (props) =>{
    const {loginForm, loginFormChange, login} = props
    return(
        <div className="book-modal modal fade" id="login" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal">
                    <img src="assets/img/close-icon.svg" alt="Close modal"/>
                    </div>
                    <div class="container">
                        <form id="AuthForm" className="row justify-content-center text-center" onSubmit={login}>
                            <div className="row justify-content-center mb-4 mt-5">
                                <div className="col-7">
                                    <div className="form-group">
                                        <input className="form-control" id="id" type="text" placeholder="STUDENT NUMBER" onChange={loginFormChange} value={loginForm.id}/>
                                        
                                    </div>
                                    <div class="form-group">
                                        <input className="form-control" id="password" type="password" placeholder="PASSWORD" onChange={loginFormChange} value={loginForm.password}/>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase mb-4" id="submitButton" type="submit">Login</button></div> 
                        </form>

                        <div class="container">            
                            <a class="btn-xl text-uppercase" href="/signup">회원가입</a>
                            <br/>
                            <a class="btn-xl text-uppercase" href="/find">비밀번호 찾기</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginModal