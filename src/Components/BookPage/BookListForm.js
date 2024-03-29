
import BookListItem from "./BookListItem"
import BookRegisterModal from "./BookRegisterModal"
import BookInfoModal from "./BookInfoModal"
import "../Styles.css"

const BookListForm = (props) =>{
    const {booklist,statusChange, bookId, reservationClick, reservationform, ontitleChange,onSerch} = props

    const bookModal = booklist.map((index) =>{
        return <BookInfoModal key={index.id} bookIndex={index.id} info={index} reservationClick={reservationClick}/>
    })

    const books = booklist.map((index) =>{
        return <BookListItem key={index.id} bookname={index.name} bookprice={index.price} sale={index.status} bookIndex={index.id}  info={index} bookId={bookId} reservationClick={reservationClick}  reservationform={reservationform} bookModal={bookModal}/>
    })
    
    return( 
        <>
            {/* 제목 및 search bar */}
            <section className="bg-dark py-5" id="search">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white mb-5">
                        <h1 className="display-4 fw-bolder">Book Shop</h1>
                    </div>

                    {/* searchbar */}
                    <div id="SearchForm">
                        <div className="row justify-content-center mb-4 mt-5">
                            <div className="col-7 form-group">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="BOOK NAME" onChange={ontitleChange}/>
                                    <button className="btn btn-primary" type="submit" id="button-addon2" onClick={onSerch}>검색</button>
                                    <button className="btn btn-primary" style={{background:"#fd7e14", border:"#fd7e14", borderRadius: "0.2rem"}}id="button-addon2" href="#registerModal" data-bs-toggle="modal">등록</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="text-center">
                    <div className="form-group   mb-4 ">
                        <div className="col form-check me-5">
                            <input type="radio" name="stauts" id="ALL"  className="form-check-input" value="ALL" onChange={statusChange} defaultChecked/>
                            <label htmlFor="ALL" className="form-check-label" style={{color:"white"}} >전체</label>
                        </div>
                        <div className="col form-check me-5">
                            <input type="radio" name="stauts" id="SELL"  className="form-check-input" value="SELL" onChange={statusChange}/>
                            <label htmlFor="SELL" className="form-check-label" style={{color:"white"}}>판매</label>
                        </div>
                        <div className="col form-check">
                            <input type="radio" name="stauts" id="LEND" className="form-check-input" value="LEND" onChange={statusChange}/>
                            <label htmlFor="LEND" className="form-check-label" style={{color:"white"}}>대여</label>
                        </div>
                    </div>
                    </div>
                </div>
                <BookRegisterModal />
            </section>

            {/* 책 리스트 */}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-left">
                    {books}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookListForm