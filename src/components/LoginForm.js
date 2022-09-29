import "./Styles.css"

const LoginForm = () =>{
    return(
		<section class="page-section" id="auth">
            <div class="container text-center">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">login</h2>
                </div>

                <form id="AuthForm" class="text-center">
                    <div class="row justify-content-center mb-4 mt-5">
                        <div class="col-7">
                            <div class="form-group">
                                <input class="form-control" id="ID" type="text" placeholder="ID"/>
                                <div class="invalid-feedback" data-sb-feedback="name:required">An ID is required.</div>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="password" type="password" placeholder="PASSWORD"/>
                                <div class="invalid-feedback">A password is required.</div>
                                <div class="invalid-feedback">Password is not valid.</div>
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
        </section>
    )
}

export default LoginForm