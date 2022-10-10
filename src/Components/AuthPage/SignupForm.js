import "../Styles.css"

const SignupForm = (props) =>{
    const {form, onChange, onSubmit} = props
    return(
		<section class="page-section" id="auth">
            <div class="container text-center">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">signup</h2>
                </div>

                <form id="AuthForm" class="text-center" onSubmit={onSubmit}>
                    <div class="row justify-content-center mb-4 mt-5">
                        <div class="col-7">
                            <div class="form-group">
                                <input class="form-control" id="std_num" type="text" placeholder="STUDENT NUMBER" name="std_num" onChange={onChange} value={form.std_num}/>
                                <div class="invalid-feedback">A student number is required.</div>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="password" type="password" placeholder="PASSWORD" onChange={onChange} value={form.password}/>
                                <div class="invalid-feedback">A password is required.</div>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="password2" type="password" placeholder="PASSWORD CHECK" onChange={onChange} value={form.password2}/>
                                <div class="invalid-feedback">A password is required.</div>
                                <div class="invalid-feedback">Password is not correct.</div>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="email" type="email" placeholder="EMAIL" onChange={onChange} value={form.email}/>
                                <div class="invalid-feedback">An email is required.</div>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="phonenum" type="text" placeholder="PHONE NUMBER" onChange={onChange} value={form.phonenum}/>
                                <div class="invalid-feedback">A phone number is required.</div>
                            </div>
						</div>
                    </div>

                    <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">signup</button></div> 
                </form>
            </div>
        </section>
    )
}

export default SignupForm