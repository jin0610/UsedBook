import BookListItem from "./BookListItem"
import "./Styles.css"

const OtherBookListForm = () =>{
    return(
        // <!-- Related items section-->
        <section class="py-5 bg-light">
            <div class="container px-4 px-lg-5 mt-5">
                <h2 class="fw-bolder mb-4">Other Books</h2>
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 overflow-auto">
                    <BookListItem bookname="book name" bookprice="30,000" sale="판매"/>
                    <BookListItem bookname="book name" bookprice="30,000" sale="대여"/>
                    <BookListItem bookname="book name" bookprice="30,000" sale="판매"/>
                    <BookListItem bookname="book name" bookprice="30,000" sale="판매"/>
                    <BookListItem bookname="book name" bookprice="30,000" sale="대여"/>
                </div>
            </div>
        </section>
    )
}

export default OtherBookListForm