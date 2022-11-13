
import "./Styles.css"

const Navigation = (props) =>{
    const user = sessionStorage.getItem("Session_Attrs")
    // 로그아웃 delete /users/logout
    const logout = () =>{

        sessionStorage.clear()
        window.location.href = '/'
        console.log("로그아웃")
     
    }
    return(
        <div class="navbar navbar-expand-lg  fixed-top">
            <div class="container">
                {user? <a class="navbar-brand" href="/booklist">SC Book Site</a>:
                 <a class="navbar-brand" href="/">SC Book Site</a>}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        
                        {user!=null? (
                            <>
                            <li class="nav-item dropdown me-3">
                            <a class="nav-link dropdown-toggle" 
                            aria-current="page" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Books</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/booklist">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">본부직속</a></li>
                                <li><a class="dropdown-item" href="#!">생명산업과학대학</a></li>
                                <li><a class="dropdown-item" href="#!">사회과학대학</a></li>
                                <li><a class="dropdown-item" href="#!">인문예술대학</a></li>
                                <li><a class="dropdown-item" href="#!">공과대학</a></li>
                                <li><a class="dropdown-item" href="#!">사범대학</a></li>
                                <li><a class="dropdown-item" href="#!">약학대학</a></li>
                                <li><a class="dropdown-item" href="#!">미래융합대학</a></li>
                                <li><a class="dropdown-item" href="#!">융합전공</a></li>
                            </ul>
                        </li>
                            <li class="nav-item me-3"><a class="nav-link" href="#" onClick={logout}>LOGOUT</a></li>
                            <li class="nav-item me-3"><a class="nav-link" href="/mypage">Mypage</a></li>
                            <li class="nav-item"><a class="nav-link" href="/qna">FAQs</a></li>
                            
                        </>)

                        :   
                            <>
                            <li class="nav-item me-3"><a class="nav-link" href="/login">LOGIN</a></li>
                            <li class="nav-item me-3"><a class="nav-link" href="/signup">SIGNUP</a></li>
                            </>
                        }
                        
                        
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation