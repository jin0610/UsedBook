const MyPageForm = () =>{
    return(
        <section className="container">
            <div className="justify-content-start">
                <div className="aside">
                    <h3>00000000</h3>
                    <div class="사이드바 메뉴">
                        개인정보 변경(비밀번호 변경 / 전화번호 변경)
                        판매 목록
                        구매 목록
                        대여 목록
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#changepwdmodal" data-bs-toggle="modal">비밀번호 변경</a></div>
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" data-bs-toggle="modal">전화번호 변경</a></div>
                    </div>
                </div>
            </div>
            
            <div>
                <div>
                    판매 건 수
                </div>
                <div>
                    구매 건 수
                </div>
                <div>
                    대여 건 수
                </div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    판매 리스트    
                </div>
                <div>
                    대여 리스트
                </div>
            </div>
        </section>
    )
}

export default MyPageForm