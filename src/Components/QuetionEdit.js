import "./Styles.css"

const QuetionEdit = () =>{
    return( 
        <>
            {/* 제목 및 search bar */}
            <section class="bg-dark py-5" id="search">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white mb-5">
                        <h1 class="display-4 fw-bolder">Q & A 수정하기</h1>
                    </div> 
                </div>
            </section>
        
            <section class ="py-5 board_wrap">
                <div class ="container px-4 px-lg-5 mt-5 board_write_wrap">
                    <div class = "col-md-6 board_write">
                        <div class="writeTtitle">
                            <dl>
                                <dt>제목</dt>
                                <dd><input type="text" placeholder="제목 입력" value="글 제목이 들어갑니다."></input></dd>
                            </dl>
                        </div>
                        <div class="writeInfo">
                            <dl>
                                <dt>글쓴이</dt>
                                <dd><input type="text" placeholder="글쓴이 입력" value="신서영"></input></dd>
                            </dl>
                            <dl>
                                <dt>비밀번호</dt>
                                <dd><input type="password" placeholder="비밀번호 입력" value="1234"></input></dd>
                            </dl>
                        </div>
                        <div class="writeCont">
                            <textarea placeholder="내용 입력">
글 내용이 들어갑니다.       
                            </textarea>
                        </div>
                    </div>

                    <div class = "bt_wrap">
                        <div class ="offset-1 btn btn-outline-dark flex-shrink-0">
                            <a href="/qnaview" class ="on me-1"> 수정 </a>
                        </div>
                        <div class = "offset-1 btn btn-outline-dark flex-shrink-0">
                        <a href="/qna" class ="on me-1"> 취소 </a>
                        </div>
                    </div>
                </div>
            </section>
    
        </>
    )
}

export default QuetionEdit