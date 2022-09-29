import BookListItem from "./BookListItem"
import BookListItemmodal from "./BookListItemmodal"
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
                                    
                                </div>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </section>

            {/* 책 리스트 */}
            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-left">
                        <BookListItem bookname="book name (페이지 ver)" bookprice="30,000" sale="판매"/>
                        <BookListItemmodal bookname="book name (모달 ver)" bookprice="30,000" sale="대여"/>
                        <BookListItem bookname="book name" bookprice="30,000" sale="대여"/>
                        <BookListItem bookname="book name" bookprice="30,000" sale="판매"/>
                        <BookListItem bookname="book name" bookprice="30,000" sale="판매"/>
                        <BookListItem bookname="book name" bookprice="30,000" sale="대여"/>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookListForm