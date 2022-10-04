import QuetionListItem from "./QuetionListItem"
import "./Styles.css"

const QuetionListForm = () =>{
    return( 
        <>
            {/* 제목 및 search bar */}
            <section class="bg-dark py-5" id="search">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white mb-5">
                        <h1 class="display-4 fw-bolder">Q & A</h1>
                    </div>

                    {/* searchbar */}
                    <form id="SearchForm">
                        <div class="row justify-content-center mb-4 mt-5">
                            <div class="col-7 form-group">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Q & A SEARCH"/>
                                    <button class="btn btn-primary" type="button" id="button-addon2">검색</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        
            <section class ="py-5 board_wrap">
                <div class ="container px-4 px-lg-5 mt-5 board_list_wrap">
                    <div class = "col-md-6 board_list">
                        <div class="top">
                            <div class="num">번호</div>
                            <div class="title">제목</div>
                            <div class="writer">글쓴이</div>
                            <div class="date">작성일</div>
                        </div>
                        <div>
                        <QuetionListItem qnanum="5" qnatitle="제목" qnawriter="신서영" qnadate="2022.10.04"/>
                        </div>
                        <div>
                        <QuetionListItem qnanum="4" qnatitle="제목" qnawriter="신서영" qnadate="2022.10.03"/>
                        </div>
                        <div>
                        <QuetionListItem qnanum="3" qnatitle="제목" qnawriter="신서영" qnadate="2022.10.02"/>
                        </div>
                        <div>
                        <QuetionListItem qnanum="2" qnatitle="제목" qnawriter="신서영" qnadate="2022.10.01"/>
                        </div>
                        <div>
                        <QuetionListItem qnanum="1" qnatitle="제목" qnawriter="신서영" qnadate="2022.09.04"/>
                        </div>
                    </div>

                    <div class ="board_page">
                        <a href="#" class="bt first">{"<<"}</a>
                        <a href="#" class="bt prev">{"<"}</a>
                        <a href="#" class="num on">1</a>
                        <a href="#" class="num">2</a>
                        <a href="#" class="num">3</a>
                        <a href="#" class="num">4</a>
                        <a href="#" class="num">5</a>
                        <a href="#" class="bt next">{">"}</a>
                        <a href="#" class="bt last">{">>"}</a>
                    </div>
                    <div class = "bt_wrap">
                        <div class ="offset-1 btn btn-outline-dark flex-shrink-0">
                            <a href="/qnainsert" class ="on me-1"> 등록 </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuetionListForm

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