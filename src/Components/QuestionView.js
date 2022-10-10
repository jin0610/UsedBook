import { useLocation } from "react-router"
import "./Styles.css"

const QuestionView = (props) =>{
    const {qnanum, qnatitle, qnawriter, qnadate} = props
    const location = useLocation();
    console.log(location.state)
    return( 
        <>
            {/* 제목 및 search bar */}
            <section class="bg-dark py-5" id="search">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white mb-5">
                        <h1 class="display-4 fw-bolder">View Question</h1>
                    </div> 
                </div>
            </section>
        
            <section class ="py-5 board_wrap">
                <div class ="container px-4 px-lg-5 mt-5 board_view_wrap">
                    <div class = "col-md-6 board_view">
                        <div class="viewTitle">
                            {qnatitle}
                        </div>
                        <div class="viewInfo">
                            <dl>
                                <dt>번호</dt>
                                <dd>{qnanum}</dd>
                            </dl>
                            <dl>
                                <dt>글쓴이</dt>
                                <dd>{qnawriter}</dd>
                            </dl>
                            <dl>
                                <dt>작성일</dt>
                                <dd>{qnadate}</dd>
                            </dl>
                        </div>
                        <div class="viewCont">
                            글 내용이 들어갑니다
                            <br></br><br></br><br></br><br></br><br></br>
                            <br></br><br></br><br></br><br></br><br></br>
                        </div>
                    </div>

                    <div class = "bt_wrap">
                        <div class ="offset-1 btn btn-outline-dark flex-shrink-0">
                            <a href="/qna" class ="on me-1"> 목록 </a>
                        </div>
                        <div class = "offset-1 btn btn-outline-dark flex-shrink-0">
                        <a href="/qnaedit" class ="on me-1"> 수정 </a>
                        </div>
                    </div>
                </div>
            </section>
    
        </>
    )
}

export default QuestionView

/* 버튼 두개일 때
                    <div class = "bt_wrap">
                        <div class ="offset-1 btn btn-outline-dark flex-shrink-0">
                            <a href="#" class ="on me-1"> 등록 </a>
                            
                        </div>
                        <div class = "offset-1 btn btn-outline-dark flex-shrink-0">
                        <a href="#" class ="on me-1"> 수정 </a>
                        </div>
                    </div>
*/