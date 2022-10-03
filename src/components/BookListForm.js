
import BookListItem from "./BookListItem"
import BookRegisterModal from "./BookRegisterModal"
import "./Styles.css"

const BookListForm = () =>{
    return( 
        <>
            {/* 제목 및 search bar */}
            <section class="bg-dark py-5" id="search">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white mb-5">
                        <h1 class="display-4 fw-bolder">Shop in style</h1>
                    </div>

                    {/* searchbar */}
                    <form id="SearchForm">
                        <div class="row justify-content-center mb-4 mt-5">
                            <div class="col-7 form-group">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="BOOK NAME"/>
                                    <button class="btn btn-primary" type="button" id="button-addon2">검색</button>
                                    <button class="btn btn-primary" style={{background:"#fd7e14", border:"#fd7e14", borderRadius: "0.2rem"}} type="button" id="button-addon2" href="#registerModal" data-bs-toggle="modal">등록</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
                <BookRegisterModal/>
            </section>

            {/* 책 리스트 */}
            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-left">
                        <BookListItem bookname="book name" bookprice="30,000" sale="판매" bookIndex="1"/>
                        <BookListItem bookname="book name" bookprice="30,000" sale="대여" bookIndex="2"/>
                        <BookListItem bookname="book name" bookprice="30,000" sale="판매" bookIndex="3"/>
                        <BookListItem bookname="book name" bookprice="30,000" sale="판매" bookIndex="4"/>
                        <BookListItem bookname="book name" bookprice="30,000" sale="대여" bookIndex="5"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookListForm