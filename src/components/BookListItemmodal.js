import "./Styles.css"
import Modaltest from"./modaltest"

const BookListItemmodal = (props) =>{
    const {bookname, bookprice, sale} = props
    return(
        <div class="col mb-5">
            <div class="card h-100 ">
                <div class="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>{sale}</div>
                <img class="card-img-top" src="https://dummyimage.com/450x500/dee2e6/6c757d.jpg" alt="..." />

                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">{bookname}</h5>
                        {bookprice}
                    </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href="#portfolioModal" data-bs-toggle="modal" >+ more</a>
                        <Modaltest/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default BookListItemmodal