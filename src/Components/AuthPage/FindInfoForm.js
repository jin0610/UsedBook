import "../Styles.css"

const FindInfoForm = () =>{
    return(
		<section class="page-section" id="auth">
            <div class="container text-center">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase h2-col">Find Password</h2>
                </div>

                <form id="AuthForm" class="text-center">
                    <div class="row justify-content-center mb-4 mt-5">
                        <div class="col-7">
                            <div class="form-group">
                                <input class="form-control mg" id="std_num" type="text" placeholder="STUDENT NUMBER"/>
                                <div class="invalid-feedback">A student number is required.</div>
                            </div>
                            <div class="form-group">
                                <input class="form-control mg" id="email" type="email" placeholder="EMAIL"/>
                                <div class="invalid-feedback text-col">An email is required.</div>
                            </div>
						</div>
                    </div>

                    <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Find</button></div> 
                </form>
            </div>
        </section>
    )
}

export default FindInfoForm