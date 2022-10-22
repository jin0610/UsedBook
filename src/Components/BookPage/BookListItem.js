import BookInfoModal from "./BookInfoModal"
import "../Styles.css"

const BookListItem = (props) =>{
    const {bookname, bookprice, sale, bookIndex, bookInfo, info} = props

    return(
        <div class="col mb-5">
            <div class="card h-100">
                <div class="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>{sale}</div>
                <img class="card-img-top" src={info.img} alt="..." />

                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">{bookname}</h5>
                        {bookprice}
                    </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#bookinfo" data-bs-toggle="modal" onClick={bookInfo}>+ more</a></div>
                    
                    <BookInfoModal bookIndex={bookIndex} info={info}/>
                </div>
            </div>
        </div>
    )
}

export default BookListItem