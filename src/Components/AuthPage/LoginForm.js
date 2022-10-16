import "../Styles.css"

const LoginForm = (props) =>{
    const {form, onChange, onSubmit} = props
    return(
		<section className="page-section" id="auth">
            <div className="container text-center">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">login</h2>
                </div>

                <form id="AuthForm" className="text-center" onSubmit={onSubmit}>
                    <div className="row justify-content-center mb-4 mt-5">
                        <div className="col-7">
                            <div className="form-group">
                                <input className="form-control" id="std_num" type="text" placeholder="STUDENT NUMBER" onChange={onChange} value={form.std_num}/>
                                <div className="invalid-feedback" data-sb-feedback="name:required">An ID is required.</div>
                            </div>
                            <div class="form-group">
                                <input className="form-control" id="password" type="password" placeholder="PASSWORD" onChange={onChange} value={form.password}/>
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