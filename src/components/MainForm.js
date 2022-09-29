import "./Styles.css"

const MainForm = () => {
    return(
        <div class="masthead">
            <div class="container">
                <div class="masthead-subheading">Welcome To Our Studio!</div>
                <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a class="btn btn-primary btn-xl text-uppercase mb-4" href="/login">Login</a>
                <br/>
                <a class="btn-xl text-uppercase" href="/signup">회원가입</a>
            </div>
        </div>
        
    )
}

export default MainForm